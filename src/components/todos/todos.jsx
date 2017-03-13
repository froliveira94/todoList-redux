import React, { Component } from 'react';

import TodoList from './todo-list';
import TodoForm from './todo-form';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }
    }

    render() {
        return (
            <div>
                <TodoForm />
                <TodoList/>
            </div>
        );
    }
}

export default Todos;