import React from "react";
import "./TodoItemContainer.scss";
import TodoItem from "./TodoItem";

class TodoItemContainer extends React.Component {
  render() {
    return this.props.Todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
    ));
  }
}

export default TodoItemContainer;
