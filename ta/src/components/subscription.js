import React, { Component } from "react";

class Subscription extends Component {
  state = {
    name: "",
    lookingFor: [],
    expertise: [],
    meet: "offline",
    location: "",
    gender: ""
  };

  handleChange = ({ target: input }) => {
    const person = { ...this.state.person };
    person[input.name] = input.value;
    this.setState({ person });
  };

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Looking For :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mentor">Mentor</option>
            <option value="mentee">Mentee</option>
            <option value="meetUpBuddy">Meet up Buddy</option>
            <option value="sponsor">Sponsor</option>
            <option value="coach">Coach</option>
            <option value="projectBuddy">Project Buddy</option>
          </select>
        </label>
        <label>
          Expertise:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="skill1">Python</option>
            <option value="skill2">Java</option>
            <option value="skill3">JavaScript</option>
            <option value="skill4">C++</option>
            <option value="skill5">Big Data</option>
            <option value="skill6">Block Chain</option>
          </select>
        </label>
        <label>
          Meet:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="online">Online</option>
            <option value="face2face">Face to face</option>
          </select>
        </label>
        <label>
          Location:
          <input type="text" name="location" />
        </label>
        <label>
          Gender:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Subscription;
