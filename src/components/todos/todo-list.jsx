import React from 'react';

import TodoItem from './todo-item';

const TodoList = () => {
    const list = [{id:1, description:'É mentira?'},{id:2, description:'Mau Mau'}];

    return (
        <ul className="demo-list-control mld-list">
            <TodoItem description="É mintira!!" />
            <TodoItem description="Felipe" />
        </ul>
    );
};

export default TodoList;