import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View, TouchableOpacity } from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

const StyledCanvasContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const StyledSketchCanvas = styled(SketchCanvas)`
  flex: 1;
`;

const StyledButton = styled(TouchableOpacity)`
  font-size: 16px;
  width: 25%;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: #ccc;
`;

const StyledButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #F5F5F5;
`


class StyledCanvas extends Component {
  state = {
    brushColor: 'black'
  }

  handleColorButtonPress = (brushColor) => {
    this.setState({
      brushColor: brushColor
    })
  }
  

  render() {
    return (
      <StyledCanvasContainer>
        <StyledButtonContainer>
          <StyledButton
            onPress={() => {
              this.handleColorButtonPress('blue')
            }}
          >
            <Text>Blue</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              this.handleColorButtonPress('green')
            }}
          >
            <Text>Green</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              this.handleColorButtonPress('red')
            }}
          >
            <Text>Red</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              this.handleColorButtonPress('black')
            }}
          >
            <Text>Black</Text>
          </StyledButton>
        </StyledButtonContainer>
        <StyledSketchCanvas
          strokeColor={this.state.brushColor}
          strokeWidth={7}
        />
      </StyledCanvasContainer>
    );
  }
}

export { StyledCanvas };
