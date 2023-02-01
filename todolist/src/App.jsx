import {useState} from "react";
import s from './App.module.css';
import Container from './components/Container/Container.jsx';
import Button from './components/Button/Button.jsx';
import Form from "./components/Form/Form.jsx";
import TodoList from "./components/Lists/TodoList/TodoList.jsx";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, todo: 'Write Essay', done: false},
        {id: 2, todo: 'One Hour CSS Course Online', done: false},
    ]);

    function newTodo(input){
        let copy = [...todos];
        copy = [...copy, {id: todos.length + 1, todo: input, done: false}];
        setTodos(copy);
    }

    return (
        <Container>
            <div className={s.header_body}>
                <div className={s.form_filter}>
                    <h1 className={s.title}>Simple To Do List</h1>
                    <p className={s.paragraph}>Today is awesome day. The weather is awesome, you are awesome too!</p>
                    <div className={s.btn_container}>
                        <Button name="To Do"/>
                        <Button name="Done"/>
                        <Button name="Trash"/>
                    </div>
                </div>
                <Form newTodo={newTodo}/>
            </div>
            <div className={s.body}>
                <TodoList todos={todos}/>
            </div>
        </Container>
    );
};

export default App;
