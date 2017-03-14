import React from 'react';

import SquareButton from '../common/squareButton';

const TodoForm = (props) => {
    return (
        <div style={{textAlign:'right'}}>
            <div className="mdl-textfield mdl-js-textfield">
                <input
                id="todoText"
                className="mdl-textfield__input"
                type="text"
                onChange={props.handleChange}
                value={props.description}
                />
                <label className="mdl-textfield__label" htmlFor="todoText">Create or Search a Todo Item</label>
                <SquareButton icon="add" onClick={props.addTodoItem} /> 
            </div>
      </div>
    );
};

export default TodoForm;