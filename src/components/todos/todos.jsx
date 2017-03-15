import React, { Component } from 'react';

import TodoList from './todo-list';
import TodoForm from './todo-form';

import '../../sass/todo.scss';

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
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

    handleMarkAsDone = (todo) => {
       const id = todo.id;
       const list = this.state.list.filter((todo) => {
           if(todo.id === id) todo.done = true;
           return todo;
       });

       this.setState({...this.state, list});
    }

    handleMarkAsPending = (todo) => {
       const id = todo.id;
       const list = this.state.list.filter((todo) => {
           if(todo.id === id) todo.done = false;
           return todo;
       });

       this.setState({...this.state, list});
    }

    handleRemove = (todo) => {
       const id = todo.id;
       const list = this.state.list.filter((todo) => {
           if(todo.id !== id) return todo;
       });

       this.setState({...this.state, list});
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