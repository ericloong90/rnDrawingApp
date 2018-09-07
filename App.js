/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import Router from "react-native-easy-router";
import screen1 from './components/screens/screen1'
import screen2 from './components/screens/screen2'
import screen3 from './components/screens/screen3'
import styled from 'styled-components'
import { SketchCanvas } from "@terrylinla/react-native-sketch-canvas";
import * as StyledCommonComponents from './styledComponents/common'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

console.disableYellowBox = true

class MainScreen extends Component {
  render() {
    return (
      <StyledMainScreenView>
        <Text onPress={() => {
          this.props.router.push.screen1()
        }}>Click here to go to screen 1</Text>
        <Text onPress={() => {
          this.props.router.push.screen2()
        }}>Click here to go to screen 2</Text>
        <Text onPress={() => {
          this.props.router.push.screen3()
        }}>Click here to go to screen 3</Text>
      </StyledMainScreenView>
    );
  }
}

const StyledMainScreen = styled(MainScreen)`
`

const StyledMainScreenView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`


const routes = { StyledMainScreen, screen1, screen2, screen3 }

const App = () => <Router routes={routes} initialRoute='StyledMainScreen' />

export default App

AppRegistry.registerComponent('App', () => App)