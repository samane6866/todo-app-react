import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Task from "./components/Task";
import EditTask from "./components/EditTask";
import DeleteConfirmation from "./components/DeleteConfirmation";
import AddTask from "./components/AddTask";

function Router() {
  return (
    <Routes>
      <Route path="/add" element={<AddTask />} />
      <Route path="/" element={<Task />} />
      <Route path="/edit/:taskId" element={<EditTask />} />
      <Route path="/delete/:taskId" element={<DeleteConfirmation />} />
    </Routes>
  );
}

export default Router;
