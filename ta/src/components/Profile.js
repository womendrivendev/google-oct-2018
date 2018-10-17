import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

function fetchMentors() {
  fetch('http://localhost:3000/mentors')
    .then(response => response.json())
    .then(json => console.log(json))
}

class Profile extends Component {
  render() {
    return (
      <div>
        <h4>Hermione Granger</h4>
        <h4>Your Matches</h4>
        {fetchMentors()}
      </div>
    )
  }
}

export default Profile