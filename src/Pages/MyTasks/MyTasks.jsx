import { DndContext, PointerSensor, useSensor, useSensors,closestCorners } from '@dnd-kit/core';
import React, { useContext, useEffect, useState } from 'react';
import Column from '../../Components/DragAndDrop/Column';
import { io } from "socket.io-client";
import { AuthContext } from '../../AuthProvider/AuthProvider';



// WebSocket connection
const socket = io("http://localhost:5000"); 

const MyTasks = () => {
  // const [columns, setColumns] = useState({ todo: [], inProgress: [], done: [] });
  const {columns, setColumns} = useContext(AuthContext);

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    socket.on("loadTasks", (serverTasks) => setColumns(serverTasks));

    return () => socket.off("loadTasks");
  }, []);

  // const addTask = (category, title) => {
  //   const newTask = { id: `task-${Date.now()}`, title };
  //   socket.emit("addTask", { category, task: newTask });
  // };

  const addTask = (category, title) => {
    const newTask = { id: `task-${Date.now()}`, title };
  
    
    setColumns((prevColumns) => ({
      ...prevColumns,
      [category]: [...prevColumns[category], newTask],
    }));
  
   
    socket.emit("addTask", { category, task: newTask });
  };


  const updateTask = (taskId, category, newTitle) => {
    socket.emit("updateTask", { taskId, category, newTitle });
  };

  const deleteTask = (taskId, category) => {
    socket.emit("deleteTask", { taskId, category });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    let sourceCategory = Object.keys(columns).find((key) =>
      columns[key].some((task) => task.id === active.id)
    );

    let destinationCategory = Object.keys(columns).find(
      (key) => key === over.id || columns[key].some((task) => task.id === over.id)
    );

    if (!sourceCategory || !destinationCategory) return;
    if (sourceCategory === destinationCategory) return;

    socket.emit("moveTask", { taskId: active.id, sourceCategory, destinationCategory });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
        <Column id="todo" title="To-Do" tasks={columns.todo} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />
        <Column id="inProgress" title="In Progress" tasks={columns.inProgress} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />
        <Column id="done" title="Done" tasks={columns.done} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </DndContext>
  );
};


export default MyTasks;