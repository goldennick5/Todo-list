import React, {useState} from 'react';
import s from "../TodoItem/TodoItem.module.css";
import threePoints from "../../../assets/Vector.png";
import MoveBackModal from "../../Modal/MoveBackModal.jsx";

const TrashItem = ({todo, handleComplete, handleDelete, moveBackToTodo}) => {
    const [finishHover, setFinishHover] = useState(false);

    function handleFinishMouseOver() {
        setFinishHover(true);
    }

    function handleFinishMouseOut() {
        setFinishHover(false);
    }

    return (
        <div className={s.todoitem} key={todo.id}>
            <div onMouseOver={handleFinishMouseOver} onMouseOut={handleFinishMouseOut}>
                <img src={threePoints} alt="threePoints"/>
                {
                    finishHover ? <MoveBackModal todo={todo} handleDelete={handleDelete} moveBackToTodo={moveBackToTodo}/> : ""
                }
            </div>
            <input type="checkbox"
                   defaultChecked={todo.done}
                   onChange={() => handleComplete(todo.id)}
            />
            <p style={todo.done === true ? {textDecoration: "line-through"} : null}>{todo.todo}</p>
        </div>
    );
};

export default TrashItem;