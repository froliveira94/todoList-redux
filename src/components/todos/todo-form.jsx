import React from 'react';

import SquareButton from '../common/squareButton';

const TodoForm = (props) => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            props.addTodoItem();
        }
    }

    return (
        <div style={{textAlign:'right'}}>
            <div className="mdl-textfield mdl-js-textfield">
                <input
                id="todoText"
                className="mdl-textfield__input"
                type="text"
                onChange={props.handleChange}
                value={props.description}
                onKeyUp={keyHandler}
                />
                <label className="mdl-textfield__label" htmlFor="todoText">Create or Search a Todo Item</label>
                <SquareButton icon="add" onClick={props.addTodoItem} /> 
            </div>
      </div>
    );
};

export default TodoForm;