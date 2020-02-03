import React, {
    Component
} from "react";

// @ts-ignore
import About from './components/Pages/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import Todos from "./components/Todos";
// @ts-ignore
import Header from "./components/Layout/Header"
// @ts-ignore
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';
import axios from 'axios';


class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))

    }

    markComplete = (id) => {
        console.log(id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    delTodo = (id) => {
        console.log(id);
        this.setState({
            todos: [...this.state.todos.filter(todo =>
                todo.id !== id
            )]
        })
    }

    addTodo = (title) => {
        console.log(title);
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    render() {
            // console.log(this.state.todos);
            return ( <
                    Router >

                    `<div className = "App" >
                <
                div className = "container" >
                <
                Header / >
                <Route exact path="/" render={
// @ts-ignore
                props =>(
                    <React.Fragment>
                        <
                        AddTodo addTodo = { this.addTodo }
                        / > 
                        <
                        Todos todos = {
                            this.state.todos
                        }
                        markComplete = { this.markComplete }
                        delTodo = { this.delTodo }
                        / > 

                    </React.Fragment>   

                )} />
                <Route path= "/about" component={About}/>
                < /
                div >
                </div>

            </Router>
        );
    }
}

export default App