
import {useSortable} from '@dnd-kit/sortable'
import React, { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import {
  DndContext,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";
import { AuthContext } from '../../AuthProvider/AuthProvider';

// WebSocket connection
const socket = io("http://localhost:5000"); 


const Task = ({ id, title, category, updateTask, deleteTask }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      padding: "10px",
      margin: "5px",
      backgroundColor: "#ffeb3b",
      cursor: "grab",
      textAlign: "center",
      borderRadius: "5px",
      fontSize: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    };
  
    // const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const {isEditing, setIsEditing} = useContext(AuthContext);
  
    return (
      <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={() => {
              updateTask(id, category, newTitle);
              setIsEditing(false);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                updateTask(id, category, newTitle);
                setIsEditing(false);
              }
            }}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setIsEditing(true)}>{title}</span>
        )}
  
        <button onClick={() => deleteTask(id, category)} style={{ marginLeft: "5px" }}>
          ❌
        </button>
      </div>
    );
  };
export default Task;