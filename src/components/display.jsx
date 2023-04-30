import React, { Component } from "react";

class Display extends Component {
  state = {
    title: 'Display Component',
    imageUrl: 'https://picsum.photos/800/200'
  };
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <img src={this.state.imageUrl} alt="scenery"></img>
        <h4>Good Afternoon everyone!!</h4>
      </div>
    );
  }
}

export default Display;
