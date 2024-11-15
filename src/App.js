// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import TodoList from './components/TodoList/TodoList';
import AddEditTask from './components/AddEditTask/AddEditTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout><TodoList /></DefaultLayout>}
        />
        <Route
          path="/add"
          element={<DefaultLayout><AddEditTask status="add" /></DefaultLayout>}
        />
        <Route
          path="/edit/:id"
          element={<DefaultLayout><AddEditTask status="edit" /></DefaultLayout>}
        />
      </Routes>
    </div>
  );
}

export default App;
