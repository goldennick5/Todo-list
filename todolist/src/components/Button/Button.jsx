import React from 'react';
import s from './Button.module.css';

const Button = (props) => {

    return (
        <button className={props.filter === 'all' ? 'active' : s.btn} onClick={() => props.handleFilterChange(props.name)}>
            {props.name}
        </button>
    );
};

export default Button;