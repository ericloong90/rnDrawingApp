import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components';

class screen2 extends Component {
  render() {
    return (
      <MainContainer>
        <Text>This is screen 2</Text>
        <Text onPress={() => {
          this.props.router.stack[0].pop()
        }}>Click to go back to main screen</Text>
      </MainContainer>
    )
  }
}

MainContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export default styled(screen2)`

`