import React, {useState} from 'react';
import TrashModal from "../../Modal/TrashModal.jsx";
import threePoints from '../../../assets/Vector.png';
import MoveBackModal from "../../Modal/MoveBackModal.jsx";
import s from './TodoItem.module.css';

const TodoItem = ({todo, handleComplete, handleTrash, filter}) => {
    const [isHovering, setIsHover] = useState(false);

    function handleMouseOver() {
        setIsHover(true);
    }

    function handleMouseOut() {
        setIsHover(false);
    }

    return (
        <div className={s.todoitem} key={todo.id}>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={threePoints} alt="threePoints"/>
                {isHovering ? <TrashModal todo={todo}
                                           handleTrash={handleTrash}
                                           handleMouseOver={handleMouseOver}
                                           handleMouseOut={handleMouseOut}/> : ""}
            </div>
            <input type="checkbox"
                   defaultChecked={todo.done}
                   onChange={() => handleComplete(todo.id)}
            />
            <p style={todo.done === true ? {textDecoration: "line-through"} : null}>{todo.todo}</p>
        </div>
    );
};

export default TodoItem;