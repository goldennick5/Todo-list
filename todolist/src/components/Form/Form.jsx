import React, {useState} from 'react';
import plus from '../../assets/Plus Math.png';
import s from './Form.module.css';
import FormMenu from "./FormMenu/FormMenu.jsx";

const Form = ({newTodo}) => {
    const [showModal, setShowModal] = useState(false);
    function displayModal() {
        setShowModal(!showModal)
    }

    return (
        <div className={s.form}>
            {showModal ? <FormMenu newTodo={newTodo}/> : ""}
            <div className={s.btn_container}>
                <button className={s.btn} onClick={displayModal}>
                    <img src={plus} alt="plus"/>
                </button>
            </div>
        </div>
    );
};

export default Form;