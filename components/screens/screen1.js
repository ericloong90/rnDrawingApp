import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from "native-base";
import * as StyledCommonComponents from '../../styledComponents/common'

class screen1 extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button 
              transparent
              onPress={() => {
                this.props.router.stack[0].pop()
              }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Plain Canvas</Title>
          </Body>
          <Right />
        </Header>
        <StyledCommonComponents.StyledCanvas 
          canvasAction='plain'
        />
      </Container>
    )
  }
}

export default styled(screen1)`

`
