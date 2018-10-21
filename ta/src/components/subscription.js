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

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("test");
    const { name, gender } = this.state;

    const formPayload = {
      name,
      gender,
      lookingFor: [],
      expertise: [],
      meet: "offline",
      location: ""
    };

    this.submitRequest(formPayload);
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
            <option value="skill1">Data Science</option>
            <option value="skill2">Backend Engineer</option>
            <option value="skill3">Frontend Engineer</option>
            <option value="skill4">Full-stack Engineer</option>
            <option value="skill5">Software Architect</option>
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
