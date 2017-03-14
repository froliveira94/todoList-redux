import React, { Component } from 'react';

import TodoList from './todo-list';
import TodoForm from './todo-form';

import '../../sass/todo.scss';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: [{id:1, description:'ahuahuhua', done: false}]
        }
    }

    addTodoItem = () => {
        console.log('addTodoItem');
    }

    handleMarkAsDone = () => {
        console.log('handleMarkAsDone');
    }

    handleMarkAsPending = () => {
        console.log('handleMarkAsPending');
    }

    handleRemove = () => {
        console.log('handleRemove');
    }

    render() {
        return (
            <div>
                <TodoForm />
                <div className="todo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Minhas Tasks</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <TodoList list={this.state.list} 
                                  handleMarkAsDone = {this.handleMarkAsDone}
                                  handleMarkAsPending = {this.handleMarkAsPending}
                                  handleRemove = {this.handleRemove} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Todos;