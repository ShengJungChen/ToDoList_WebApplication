import React from 'react'
import './ExpandTodo.scss'

// details of a to-do
class ExpandTodo extends React.Component {
   
  
    render(){
        return (
            <div className="details">
                <li><strong>Completion Status:</strong> {this.props.todo.complete?"Completed": "In Progress"}</li>
                <li><strong>Description:</strong> {this.props.todo.description}</li>
                <li><strong>Due Date:</strong> {this.props.todo.dueDate.slice(0,10)}</li>
                <li><strong>Task Created:</strong> {this.props.todo.createdDate}</li>
            </div>
        )
    }
    
}

export default ExpandTodo
