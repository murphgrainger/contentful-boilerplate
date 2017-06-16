import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from './config'

class App extends Component {

  initClient (spaceId, deliveryAccessToken) {
    let client
    let authorized
    client = createClient({
      space: spaceId,
      accessToken: deliveryAccessToken,
      host: 'cdn.contentful.com'
    })
    return client.getEntries()
      .then((res) => {
        console.log(res.items);
        authorized = true
        return res.items
      })
  }

  componentDidMount() {
    console.log('hello!');
    this.initClient(spaceId, deliveryAccessToken)
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
