import React, {Component} from 'react';
import './TodoListForm.css';

class TodoListForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""    // Initializing the new task of the form
        }

        // Binding the functions 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // function to keep a track of the changes in the input through react state
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    // function to submit the added task 
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo(this.state);  // Passing the task value to the addTodo function of parent component
        this.setState({
            task: ""   // Resetting the form value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task' style={{fontSize: "1.2rem"}}> <b>New Task: </b> </label>
                    <input
                        id='task' 
                        name='task'
                        value={this.state.task}
                        onChange={this.handleChange}
                        required
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default TodoListForm;