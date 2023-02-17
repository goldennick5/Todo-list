import React, { useState } from "react";
import s from "./App.module.css";
import Container from "./components/Container/Container.jsx";
import Button from "./components/Button/Button.jsx";
import Form from "./components/Form/Form.jsx";
import TodoItem from "./components/Lists/TodoItem/TodoItem.jsx";
import TrashItem from "./components/Lists/TrashItem/TrashItem.jsx";
import FilterTitle from "./components/FilterTItle/FilterTitle";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Write Essay", done: false },
    { id: 2, todo: "One Hour CSS Course Online", done: false },
  ]);
  const [done, setDone] = useState([]);
  const [trash, setTrash] = useState([]);
  const [filter, setFilter] = useState("To Do");

  function newTodo(input) {
    let copy = [...todos];
    copy = [...copy, { id: todos.length + 1, todo: input, done: false }];
    setTodos(copy);
  }

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, done: !todo.done };
        if (updatedTodo.done) {
          setDone([...done, updatedTodo]);
        } else {
          const updatedDone = done.filter((doneTodo) => doneTodo.id !== id);
          setDone(updatedDone);
        }
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleTrash = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    setTrash([...trash, selectedTodo]);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    const updatedDone = done.filter((doneTodo) => doneTodo.id !== id);
    setDone(updatedDone);
  };

  const handleDelete = (id) => {
    const updatedTrash = trash.filter((todo) => todo.id !== id);
    setTrash([...updatedTrash]);
  };

  const moveBackToTodo = (id) => {
    const selectedTodo = trash.find((todo) => todo.id === id);
    const updatedTrash = trash.filter((todo) => todo.id !== id);
    setTrash([...updatedTrash]);
    setTodos([...todos, selectedTodo]);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos =
    filter === "To Do" ? todos : filter === "Done" ? done : trash;

  return (
    <Container>
      <div className={s.header_body}>
        <div className={s.form_filter}>
          <h1 className={s.title}>Simple To Do List</h1>
          <p className={s.paragraph}>
            Today is awesome day. The weather is awesome, you are awesome too!
          </p>
          <div className={s.btn_container}>
            <Button
              handleFilterChange={handleFilterChange}
              filter={filter}
              name="To Do"
            />
            <Button
              handleFilterChange={handleFilterChange}
              filter={filter}
              name="Done"
            />
            <Button
              handleFilterChange={handleFilterChange}
              filter={filter}
              name="Trash"
            />
          </div>
        </div>
        <Form newTodo={newTodo} />
      </div>
      {filter === "To Do" ? <FilterTitle filter="To Do"/> : filter === "Done" ? <FilterTitle filter="Done"/> : <FilterTitle filter="Trash"/>}
      <div className={s.body}>
        {filteredTodos.map((todo) =>
          filter === "To Do" ? (
            <TodoItem
              todo={todo}
              handleComplete={handleComplete}
              handleTrash={handleTrash}
              filter={filter}
            />
          ) : (
            <TrashItem
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              moveBackToTodo={moveBackToTodo}
            />
          )
        )}
      </div>
    </Container>
  );
}

export default App;
