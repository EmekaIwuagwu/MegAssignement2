import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SaveToDB from './src/SaveToDB';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SaveToDB/>
    );
  }
}

export default App;
