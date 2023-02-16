import React from 'react';
import s from './TodoItem.module.css';
import threePoints from '../../../assets/Vector.png';

const TodoItem = ({todo, handleComplete, handleTrash, filter={filter}}) => {

    return (
        <div className={s.todoitem} key={todo.id}>
            {filter !== 'trash' && (
                <img onClick={() => handleTrash(todo.id)} src={threePoints} alt="threePoints"/>
            )}
            <input type="checkbox"
                   defaultChecked={todo.done}
                   onChange={() => handleComplete(todo.id)}
            />
            <p style={todo.done === true ? {textDecoration: "line-through"} : null}>{todo.todo}</p>
        </div>
    );
};

export default TodoItem;