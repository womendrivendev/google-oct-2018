import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Tech Allies App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
      </div>
    )
  }
}

export default Header