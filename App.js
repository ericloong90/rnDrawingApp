/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, AppRegistry } from 'react-native';
import Router from 'react-native-easy-router';
import screen1 from './components/screens/screen1';
import screen2 from './components/screens/screen2';
import styled from 'styled-components';
import * as StyledCommonComponents from './styledComponents/common';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Text,
  Icon,
  Title,
  Content,
  Card,
  CardItem,
  H2
} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

console.disableYellowBox = true;

class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>
              Main Screen
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem header bordered>
              <H2>Select the following options to start drawing</H2>
            </CardItem>
            <CardItem
              button
              bordered
              onPress={() => {
                this.props.router.push.screen1();
              }}
            >
              <Icon type="MaterialIcons" name="edit"/>
              <Text>Draw on a plain canvas</Text>
            </CardItem>
            <CardItem
              button
              bordered
              onPress={() => {
                this.props.router.push.screen2();
              }}
            >
              <Icon type="MaterialIcons" name="camera"/>
              <Text>Snap a picture to draw on</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const StyledMainScreen = styled(MainScreen)``;

const StyledMainScreenView = styled(View)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #f5fcff;
`;

const routes = { StyledMainScreen, screen1, screen2 };

const App = () => <Router routes={routes} initialRoute="StyledMainScreen" />;

export default App;

AppRegistry.registerComponent('App', () => App);
