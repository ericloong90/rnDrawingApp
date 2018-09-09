import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components';
import * as StyledCommonComponents from '../../styledComponents/common'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from "native-base";

class screen2 extends Component {

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
            <Title>Picture</Title>
          </Body>
          <Right />
        </Header>
        <StyledCommonComponents.StyledCanvas 
          canvasAction='camera'
        />
      </Container>
    )
  }
}

export default styled(screen2)`

`