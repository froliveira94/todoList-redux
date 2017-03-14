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

    refresh(description = '') {
        this.setState({...this.state, description});
    }

    handleChange = (e) => {
        this.setState({...this.state, description:e.target.value});
    }

    addTodoItem = () => {
        if(this.state.description.length > 3){
            const list = this.state.list;
            const timestamp = Date.now();
            list.push({
                id: timestamp,
                description: this.state.description,
                done: false
            });
            this.setState({...this.state, list});
            this.refresh();
        }
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
                <TodoForm
                description={this.state.description} 
                addTodoItem={this.addTodoItem}
                handleChange={this.handleChange} />
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