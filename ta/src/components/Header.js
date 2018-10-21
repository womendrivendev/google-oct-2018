import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Tech Allies</h1>
          <ul className="headerMenu">
            <li className="left"><Link to="/">Home</Link></li>
            <li className="right"><Link to="/subscribe">Subscribe</Link></li>
            <li className="left"><Link to="/profile">Profile</Link></li>
          </ul>
      </div>
    )
  }
}

export default Header