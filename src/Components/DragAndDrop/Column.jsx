
import Task from './Task';
import {verticalListSortingStrategy,SortableContext} from '@dnd-kit/sortable';
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

const Column = ({ title, tasks, id, addTask, updateTask, deleteTask }) => {
    const {newTask, setNewTask} = useContext(AuthContext);
    // const [newTask, setNewTask] = useState("");
  
    return (
      <div style={{ width: "30%", padding: "10px", minHeight: "300px" }}>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        
        {/* Task Input Field */}
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task..."
            style={{ flex: 1, padding: "5px", fontSize: "14px" }}
          />
          <button
            onClick={() => {
              if (newTask.trim() !== "") {
                addTask(id, newTask);
                setNewTask("");
              }
            }}
            style={{ marginLeft: "5px", padding: "5px", cursor: "pointer" }}
          >
            Add
          </button>
        </div>
  
        {/* Task List */}
        <div
          style={{
            backgroundColor: "#f1f1f1",
            padding: "10px",
            borderRadius: "5px",
            minHeight: "250px",
          }}
        >
          <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                category={id}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </SortableContext>
        </div>
      </div>
    );
  };
export default Column;