import React, {useState} from 'react';
import s from './TodoList.module.css';
import TodoItem from "./TodoItem/TodoItem.jsx";

const TodoList = ({todos}) => {

    return (
        <div className={s.todo_list}>
            <div className={s.title_container}>
                <h1 className={s.title}>To Do</h1>
            </div>
            <span className={s.line}></span>
            <div className={s.list}>
                {
                    todos.map((item) => {
                        return (
                            <TodoItem item={item} key={item.id}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TodoList;