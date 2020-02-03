import React, { Component } from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return ( <
        header style = { headerStyle } >
        <
        h1 > Todo list < /h1>  <
        Link style = { linkStyle }
        to = "/" > Home < /Link> | <Link style= {linkStyle} to="/about
        ">About</Link>  < /
        header >

    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}
const headerStyle = {
    background: "#000",
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    display: 'block',
}

export default Header;