import React, {Component} from 'react';
import TodoListForm from './TodoListForm';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = { 
            tasks: [] // Array of tasks to be done
        };

        // Binding the functions 
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    // function for adding the task to tasks array 
    addTodo(task){
        let newTask = {...task, id: uuid()}   
        this.setState(state => ({
           tasks: [...state.tasks, newTask] 
        }))
    }

    // function for removing the task from the tasks array using its id.
    removeTodo(id){
        this.setState({
            tasks: this.state.tasks.filter(todo => todo.id !== id)
        })
    }

    // function for updating the task
    updateTodo(id, updatedTask){
        const updatedTasks = this.state.tasks.map(todo => {       // mapping over the tasks array and if the id matches with any task updating it with the new updated task
            if(todo.id === id){               
                return {...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({
            tasks: updatedTasks
        });
    }

    // Rendering a list of todo elements
    renderTodos(){
        return(
            <ul style={{listStyleType: "none", marginBlockStart: "0px", paddingInlineStart: "0px"}}>
                {this.state.tasks.map(todo => (
                    <Todo 
                        task = {todo.task} 
                        key = {todo.id} 
                        id = {todo.id}
                        removeTodo = {this.removeTodo}
                        updateTodo = {this.updateTodo}
                    />
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div>
                <h1>Todo List</h1>
                {this.renderTodos() }      {/* rendering a list of todos */}
                {/* rendering a TodoList form to add a task */}
                <TodoListForm addTodo={this.addTodo}/> 
            </div>
        );
    }
}

export default TodoList;