// import fetch from 'isomorphic-fetch'
import axios from 'axios'
import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Image from './Images/hermione.jpg'

function fetchMentors() {
  fetch('http://localhost:3000/mentors')
    .then(response => response.json())
    .then(json => console.log(json))
}

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
      <div className="profil">
        <h4>Hermione Granger</h4>
        <img src={Image}/>
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