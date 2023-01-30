import React from "react";
import Todolist from "./TodoList";
import Inputtodo from "./InputTodo";
import { Card } from "react-bootstrap";

class TodoContainer extends React.Component {
  state = {
    todos: [
      { 
        title: "Wake up",
        completed: false
      },
      {
        title: "Drink Tea",
        completed: false
      },
      {
        title: "Workout",
        completed: false
      }
    ]
  };

  handleChange = (title) => {
    console.log(title)
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.title === title) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }));

    console.log(this.state.todos);
  };
  deleteTodo = (title) => {
        this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return title !== todo.title;
            })
          ]
        });
  };
  addTodoItem = (title) => {
    const newtodo = {
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newtodo]
    });
  };
  
  render() {
    return (
      <Card>
        <Inputtodo addTodoItem={this.addTodoItem} />
        <Todolist
          lists={this.state.todos}
          handleChange={this.handleChange}
          deleteTodo={this.deleteTodo}
        />
      </Card>
    );
  }
}
export default TodoContainer;
