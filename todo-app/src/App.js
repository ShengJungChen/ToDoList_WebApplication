import "./App.scss";
import React from "react";
import TodoItemContainer from "./todolist-container/todoitem-container/TodoItemContainer";
import AddTodo from './todoform-container/AddTodo'

class App extends React.Component {

  // Holds the state of all todos in an array and updates them
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

// call the fetch PUT on Rest API -> update completion status of the todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
          const data = {
            complete: todo.complete,
            title: todo.title,
            description: todo.description,
            createdDate: todo.createdDate,
            dueDate: todo.dueDate,
          };
          const url = "http://localhost:9000/todos/" + id;
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              alert("To-do status changed.")
            })
            .catch((error) => {
              alert("Error:", error);
            });
        }
        return todo;
      }),
    });
  };

// call the fetch DELETE on Rest API
  delTodo = (id) => {
    const url = "http://localhost:9000/todos/" +id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then(data=> {alert("To-do deleted.",data);
      this.setState({todos:[...this.state.todos.filter
      (todo=> todo.id!==id)]})})
      .catch((error) => {
        alert("Error:", error);
      });
  };
  
// call the fetch POST on Rest API -> create a new todo
  addTodo=(todo)=>{
    // console.log(todo.title + todo.description + todo.dueTime);
    const data = {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      dueTime: todo.dueTime,
    };

    fetch('http://localhost:9000/todos/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({todos:
    [...this.state.todos, data]});
      });
    alert("New to-do added.");
  }

  // update the state of todos every time
  componentDidMount() {
    let todoList = [];
    fetch("http://localhost:9000/todos/")
      .then((response) => response.json())
      .then((data) => {
        todoList = data.map((todo, i) => {
          return todo;
        });

        this.setState({
          todos: todoList,
        });
      });
  }

  // add todo bar and display todos area
  render() {
    const Todos = this.state.todos;
    return (
      <div className="tasksToolbar">
        <h1 className="tasksToolbar-title">To-do List</h1>
        <AddTodo addTodo={this.addTodo}/>
        <div className="displayArea">
        <TodoItemContainer
          Todos={Todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
        </div>
      </div>
    );
  }
}

export default App;
