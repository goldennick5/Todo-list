import React, {useState, useEffect} from 'react';
import s from './FormMenu.module.css';
const FormMenu = ({newTodo}) => {
    const [textArea, setTextArea] = useState("");

    function handleTextArea(event){
        setTextArea(event.target.value);
    }

    function handleSubmit(){
        newTodo(textArea);
        setTextArea("");
    }

    return (
        <div className={s.form_menu}>
            <h2 className={s.title}>Add New To Do</h2>
            <textarea className={s.textarea}
                      type="text"
                      placeholder="Your text"
                      value={textArea}
                      onChange={handleTextArea}
            />
            <div>
                <button className={s.btn}
                        onClick={handleSubmit}>Add</button>
            </div>
        </div>
    );
};

export default FormMenu;