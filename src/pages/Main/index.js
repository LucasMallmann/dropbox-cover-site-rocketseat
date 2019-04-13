import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./main.css";

class Main extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('/boxes', {
      title: this.state.newBox
    });
    this.props.history.push(`/box/${response.data._id}`);
  };

  handleChange = e => {
    this.setState({
      newBox: e.target.value
    });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit} action="">
          <img src={logo} alt="" />
          <input
            onChange={this.handleChange}
            value={this.state.newBox}
            placeholder="Criar um box"
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
