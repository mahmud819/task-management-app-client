import React, { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const columns = ["To Do", "In Progress", "Done"];

const DraggableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    margin: "5px",
    background: "#fff",
    borderRadius: "5px",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {item.text}
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then(setItems);

    const socket = new WebSocket("ws://localhost:5000");
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "UPDATE_ITEMS") {
        fetch("http://localhost:5000/items")
          .then((res) => res.json())
          .then(setItems);
      }
    };

    return () => socket.close();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeItem = items.find((item) => item.id === active.id);
    const updatedItems = items.map((item) =>
      item.id === active.id ? { ...item, column: over.id } : item
    );

    setItems(updatedItems);
    ws.send(JSON.stringify({ type: "MOVE_ITEM", item: activeItem, toColumn: over.id }));
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {columns.map((column) => (
          <div key={column} id={column} style={{ width: "200px", padding: "10px", background: "#f4f4f4", minHeight: "200px" }}>
            <h3>{column}</h3>
            <SortableContext items={items.filter((item) => item.column === column)} strategy={verticalListSortingStrategy}>
              {items.filter((item) => item.column === column).map((item) => (
                <DraggableItem key={item.id} item={item} />
              ))}
            </SortableContext>
          </div>
        ))}
      </DndContext>
    </div>
  );
};

export default App;