import React from 'react';
import s from "./MoveBackModal.module.css";
import trash from "../../assets/trash.png";
import moveBack from "../../assets/check.png";

const MoveBackModal = ({handleDelete, moveBackToTodo, todo}) => {
    return (
        <div className={s.modal}>
            <div className={s.modal_content}>
                <div className={s.modal_item} onClick={() => handleDelete(todo.id)}>
                    <img src={trash} alt="trash"/>
                    <p>Delete Forever</p>
                </div>
                <div className={s.modal_item} style={{marginTop: "10px"}} onClick={() => moveBackToTodo(todo.id)}>
                    <img src={moveBack} alt="moveBack"/>
                    <p>Move Back To To Do</p>
                </div>
            </div>
        </div>
    );
};

export default MoveBackModal;