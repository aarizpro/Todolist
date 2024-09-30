import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';

const TodoApp = () => {
  // Manage tasks and filter state
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // all, completed, pending

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save tasks to local storage when `todos` state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new task
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle the completion status of a task
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter the tasks based on the current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default TodoApp;
