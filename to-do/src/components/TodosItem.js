import React, {
    Component
} from 'react'
import propTypes from "prop-types";

export class TodosItem extends Component {

    getStyle = () => {

        return {
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    }

    // markComplete = () => {
    //     console.log(this.props);
    // }

    render() {
        // destructuring 
        const { id, title } = this.props.todo;
        return (
                // use inline style : use "{{}}"
                <
                div style = { this.getStyle() } >
                <
                h3 >
                <
                input type = "checkbox"
                onChange = { this.props.markComplete.bind(this, id) }
                / > { '' } {
                title
            } <
            button onClick = { this.props.delTodo.bind(this, id) }
        style = { buttonStyle } > x < /button> < /
        h3 > < /div >
    )
}
}

TodosItem.propTypes = {
    todo: propTypes.object.isRequired
}

const buttonStyle = {


        background: 'red',
        color: 'white',
        padding: '5px 8px',
        cursor: 'pointer',
        border: 'none',
        float: 'right',
        marginRight: '10px'

    }
    // const ItemStyle = {
    //     backgroundColor: '#f4f4f4'
    // }


export default TodosItem;