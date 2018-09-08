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
import styled from 'styled-components'
import * as StyledCommonComponents from './styledComponents/common'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from "native-base";

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
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Main Screen</Title>
          </Body>
          <Right />
        </Header>
        <Text onPress={() => {
          this.props.router.push.screen1()
        }}>Click here to draw on a plain canvas</Text>
        <Text onPress={() => {
          this.props.router.push.screen2()
        }}>Click here to snap a picture to draw on</Text>
      </Container>
    );
  }
}

const StyledMainScreen = styled(MainScreen)`
`

const StyledMainScreenView = styled(View)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #F5FCFF;
`


const routes = { StyledMainScreen, screen1, screen2 }

const App = () => <Router routes={routes} initialRoute='StyledMainScreen' />

export default App

AppRegistry.registerComponent('App', () => App)