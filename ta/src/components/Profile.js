import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Image from './Images/hermione.jpg'

function fetchMentors() {
  fetch('http://localhost:3000/mentors')
    .then(response => response.json())
    .then(json => console.log(json))
}

class Profile extends Component {
  render() {
    return (
      <div className="profil">
        <h4>Hermione Granger</h4>
        <img src={Image}/>
        <h4>Your Matches</h4>
        {fetchMentors()}
      </div>
    )
  }
}

export default Profile