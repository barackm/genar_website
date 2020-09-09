import React, { Component } from "react";

class Input extends Component {
  state = {
    user: {
      name: "",
      lastName: "",
      email: "",
    },
  };
  handleChange(e) {}
  handleChange = (e) => {
    const user = { ...this.state.user };
    const value = e.target.value;
    user[e.target.name] = value;
    this.setState({ user });
  };

  render() {
    const { name, lastName, email } = this.state.user;
    return (
      <div style={{ marginTop: 300 }}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          placeholder="last name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
const people = new Input("Daniel", "Ben");
