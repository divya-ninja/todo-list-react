import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,  // A state to know if a task is being updated or not.
            task: this.props.task
        }

        // Binding the functions
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // deleting a todo
    handleDelete(){
        this.props.removeTodo(this.props.id);
    }

    // toggling the edit state
    handleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    // function to keep a track of the changes in the input through react state
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        // Taking the updated task and passing it to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        });
    }

    render(){

        // if the task is not being updated render the task
        if(!this.state.isEditing){
            return(
                <div>
                    <div className='todo-div'>
                        <div id='todo'>
                            <li id="list-item"><b>{this.props.task}</b></li>
                        </div>
                        <div id='edit-delete-btn'>
                            <button id="edit" onClick={this.handleEdit}><i className="fas fa-pen"></i></button>
                            <button id='delete' onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <hr />
                </div>
            );   
        }else{
            // if a task is being updated, render a form to update it
            return(
                <div className='todo-div'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name='task' value={this.state.task} onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            );
        }
        
    }
}

export default Todo;