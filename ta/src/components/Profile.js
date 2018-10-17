import React, { Component } from 'react'
// import fetch from 'isomorphic-fetch'
import axios from 'axios'

class Profile extends Component {
  state = {
    mentors: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/mentors')
      .then(response => response.json())
      .then(data => this.setState({ mentors: data }))
  }

  render() {
    return (
      <div>
        <h4>Hermione Granger</h4>
        <h4>Your Matches</h4>
        {this.state.mentors.map(mentor => {
          return (
            <li key={mentor.id}>
              {mentor.name}:
              {mentor.expertises.map(expertise => {
                return (
                  <ul>
                    <li>{expertise}</li>
                  </ul>
                )
              })}
            </li>
          )
        })}
      </div>
    )
  }
}

export default Profile