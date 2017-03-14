import React from 'react';
import CircularButton from '../common/circularButton';

const TodoItem = (props) => {
    console.log(props);
    const isDone = props.todo.done ? 'done' : '';
    return (
        <li className={`mdl-list__item ${isDone}`}>
            <span className="mdl-list__item-primary-content">
                {props.todo.description}
            </span>
            <span className="mdl-list__item-secondary-action">
                <CircularButton colored={true} icon="add" onClick={() => props.handleMarkAsDone()} />
                <CircularButton colored={false} icon="replay" onClick={() => props.handleMarkAsPending()}/>
                <CircularButton colored={true} icon="delete" onClick={() => props.handleRemove()}/>
            </span>
        </li>
    );
};

export default TodoItem;