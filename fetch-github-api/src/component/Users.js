import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
    state = {
        login : null,
        repos : null
    }

    submitForm = (e) =>{
        e.preventDefault();
        const user = e.target.elements.UserName.value;
        console.log(user);  

        axios.get(`https://api.github.com/users/${user}`)
        .then((res)=>{
            console.log(res);
            const login = res.data.name;
            const repos = res.data.public_repos
            this.setState({login:login});  //  we can write like this also : this.setState({login});
            this.setState({repos:repos});
            console.log("Name ", login);
            console.log("Number of repository :", repos);
        }
        )

c
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.submitForm}>
                <label htmlFor="Name: ">Enter username :</label>
                <input style= {textStyle} type="text" name="UserName" />
                
                <button type="submit">submit</button>
                </form>
                {
                    this.state.login ? <p>Username: {this.state.login} and Number of repository : {this.state.repos}</p> : null
                }
                
            </div>
        )
    }
}

const textStyle = {
    padding:'2px 2px',
    margin:'0px 10px',
}

export default Users
