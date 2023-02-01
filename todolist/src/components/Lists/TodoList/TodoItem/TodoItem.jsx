import React from 'react';

const TodoItem = ({item}) => {
    return (
        <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.todo}</p>
        </div>
    );
};

export default TodoItem;