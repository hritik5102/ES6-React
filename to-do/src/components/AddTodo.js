import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChanged = (e) => {
        return this.setState({
            // name= " " is input field which we provided 
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return ( <
            form onSubmit = { this.onSubmit }
            style = {
                { display: 'flex' }
            } >
            <
            input type = "text"
            name = "title"
            placeholder = "Add Todo ..."
            style = {
                { flex: '10', 'padding': 10 }
            }
            value = {
                this.state.title
            }
            onChange = { this.onChanged }
            / > <
            input type = "submit"
            value = "Submit"
            className = "btn"
            style = {
                { flex: '2', cursor: 'pointer' }
            }
            /> < /
            form >
        )
    }
}

export default AddTodo