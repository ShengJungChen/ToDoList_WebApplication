import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.scss'

// add new todo by using fetch POST
class AddTodo extends Component {
    
    state={
        title: '',
        description: '',
        dueDate: '',
    }
   
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({title: '',
            description: '',
            dueDate: '',
        })
    }
    
    onChange=(e)=> this.setState({[e.target.name]: e.target.value});
    // a form to fill in new to do information
    render() {
        return (
      
            <form onSubmit={this.onSubmit} className="flexBoxFix" >
                <input type="text" 
                name="title" 
                placeholder="New Task"
                value={this.state.title}
                onChange={this.onChange}
                className="title"
                required
                />

                <input type="text" 
                name="description" 
                placeholder="Description"
                value={this.state.description}
                onChange={this.onChange}
                className="title"
                />

                <input type="date" 
                name="dueDate" 
                value={this.state.dueDate}
                onChange={this.onChange}
                className="date"
                required
                />

                <input type="submit" 
                value="Add Todo"
                className="submitBtn"
                />  

            </form>
        )
    }
}

AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired,
}
export default AddTodo
