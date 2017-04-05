/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './src/Main'

export default class Hacktiv8News extends Component {
  render() {
    return (
      <Main/>
    );
  }
}


AppRegistry.registerComponent('Hacktiv8News', () => Hacktiv8News);
