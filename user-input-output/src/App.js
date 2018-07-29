import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'Michael',
    othertext: 'SomeText'
  }

  updateUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={ this.updateUsernameHandler } username={ this.state.username } />
        <UserOutput 
          username={ this.state.username } 
          othertext={ this.state.othertext } />
      </div>
    );
  }
}

export default App;
