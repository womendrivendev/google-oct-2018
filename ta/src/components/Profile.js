// import fetch from 'isomorphic-fetch'
import axios from "axios";
import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import Hermione from "./Images/hermione.jpg";
import cat1 from "./Images/Cat1.jpg";
import cat2 from "./Images/Cat2.jpg";
import cat3 from "./Images/Cat3.jpg";

function fetchMentors() {
  fetch("http://localhost:3000/mentors")
    .then(response => response.json())
    .then(json => console.log(json));
}

class Profile extends Component {
  state = {
    mentors: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/mentors")
      .then(response => response.json())
      .then(data => this.setState({ mentors: data }));
  }

  render() {
    const img = [cat1, cat2, cat3];
    return (
      <div className="profil">
        <h4>Hermione Granger</h4>
        <img src={Hermione} />
        <h4>Your Matches</h4>
        <div className="mentorContainer">
          {this.state.mentors.map((mentor, index) => {
            return (
              <div className="mentor" key={mentor.id}>
                <img src={img[index]} />
                {mentor.name}:
                <div className="expertiseContainer">
                  {mentor.expertises.map(expertise => {
                    return (
                      <div className="expertise">
                        <div>{expertise}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
