import React from 'react';
import trash from '../../assets/trash.png';
import s from './TrashModal.module.css';

const TrashModal = ({handleTrash, todo, handleMouseOut, handleMouseOver}) => {
    return (
        <div className={s.modal} onClick={() => handleTrash(todo.id)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={s.modal_content}>
                <img src={trash} alt="trash"/>
                <p>Move to trash</p>
            </div>
        </div>
    );
};

export default TrashModal;