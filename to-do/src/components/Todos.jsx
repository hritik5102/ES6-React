import React, { Component } from "react";
import TodoItem from "./TodosItem";
import propTypes from "prop-types";

class Todos extends Component {

  render() {
    // console.log(this.props.todos);
    return this.props.todos.map(todo => <TodoItem key={todo.id} markComplete = {this.props.markComplete} todo={todo} delTodo = {this.props.delTodo} />);
  }
}

Todos.propTypes = {
  todos: propTypes.array.isRequired
};
export default Todos;
