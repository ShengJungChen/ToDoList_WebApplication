import React from 'react';
import './TodoItem.scss';
import ExpandTodo from './ExpandTodo'

// holds all todos items
class TodoItem extends React.Component{

    state={
        isExpanded : false,
    }
// expanded view of the to-do
    toggle = () => this.setState(
        { isExpanded: !this.state.isExpanded }
    )

    render() {
        const {id, title}= this.props.todo;

        // a block and three task buttons
    return (
        <div className="ItemContainer">
            <div> 
                <strong>{title}</strong>
                <button onClick={this.props.delTodo.bind(this, id)} 
                    className="del" title="Delete">
                    <p>Delete</p>
                </button> 
                
                <button onClick={this.props.markComplete.bind(this, id)} 
                    className="complete">
                    {this.props.todo.complete?<p>Completed</p>:<p>In Progress</p>}
                </button>
                
                <button onClick={this.toggle} 
                    className="expand">
                    {this.state.isExpanded ?  <p>Show Less</p> : <p>Show Detail</p>}
                </button>

                {this.state.isExpanded && <ExpandTodo todo = {this.props.todo} />}
            </div>
        </div>
    )
  }
}

export default TodoItem
