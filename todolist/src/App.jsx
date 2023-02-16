import {useState} from "react";
import s from './App.module.css';
import Container from './components/Container/Container.jsx';
import Button from './components/Button/Button.jsx';
import Form from "./components/Form/Form.jsx";
import TodoItem from "./components/Lists/TodoItem/TodoItem.jsx";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, todo: 'Write Essay', done: false},
        {id: 2, todo: 'One Hour CSS Course Online', done: false},
    ]);
    const [done, setDone] = useState([]);
    const [trash, setTrash] = useState([]);
    const [filter, setFilter] = useState('To Do');

    function newTodo(input){
        let copy = [...todos];
        copy = [...copy, {id: todos.length + 1, todo: input, done: false}];
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

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const filteredTodos =
        filter === 'Done'
            ? done
            : filter === 'Trash'
                ? trash
                : todos;

    return (
        <Container>
            <div className={s.header_body}>
                <div className={s.form_filter}>
                    <h1 className={s.title}>Simple To Do List</h1>
                    <p className={s.paragraph}>Today is awesome day. The weather is awesome, you are awesome too!</p>
                    <div className={s.btn_container}>
                        <Button handleFilterChange={handleFilterChange} filter={filter} name="To Do"/>
                        <Button handleFilterChange={handleFilterChange} filter={filter} name="Done"/>
                        <Button handleFilterChange={handleFilterChange} filter={filter} name="Trash"/>
                    </div>
                </div>
                <Form newTodo={newTodo}/>
            </div>
            <div className={s.body}>
                {
                    filteredTodos.map((todo) => (
                        <TodoItem todo={todo} handleComplete={handleComplete} handleTrash={handleTrash} filter={filter}/>
                    ))
                }
            </div>
        </Container>
    );
};

export default App;
