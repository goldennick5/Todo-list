import React from 'react';
import s from './FormMenu.module.css';
import Button from "../../Button/Button.jsx";
const FormMenu = () => {
    return (
        <div className={s.form_menu}>
            <h2>Add New To Do</h2>
            <input type="text"/>
            <button className={s.btn}>Add</button>
        </div>
    );
};

export default FormMenu;