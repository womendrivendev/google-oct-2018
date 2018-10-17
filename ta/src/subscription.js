import React, { Component } from "react";

class Subscription extends Component {
  state = {
    name: "",
    lookingFor: []
  };
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" autocomplete="off"/>
        </label>
        <label class="custom-select">
          Looking For :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mentor">Mentor</option>
            <option value="lime">Mentee</option>
            <option value="coconut">Meet up Buddy</option>
            <option value="mango">Sponsor</option>
            <option value="mango">Coach</option>
            <option value="mango">Project Buddy</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Subscription;
