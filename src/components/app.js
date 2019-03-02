import React, { Component } from 'react';
import Game from './game';

export default class App extends Component {
  render() {
    return (
      <div className="title">
        <h1>This is my Tic Tac Toe project, enjoy it.</h1>

        <div>{console.log(status)}</div> 
        <Game />
      </div>
    );
  }
}
