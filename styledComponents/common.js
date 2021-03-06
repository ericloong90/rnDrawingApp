import React, { Component } from 'react';
import styled from 'styled-components';
import { View, TouchableOpacity, Alert } from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import { RNCamera } from "react-native-camera";
import { Toast, Text } from 'native-base'

const StyledCanvasContainer = styled(View)`
  flex: 1;
  flex-direction: column;
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

const StyledButtonBottom = styled(StyledButton)`
  width: 33%;
`

const StyledButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #F5F5F5;
`

const StyledCameraContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  background-color: black;
`

class StyledCanvas extends Component {
  state = {
    brushColor: 'black',
    photoPath: null,
  }

  handleColorButtonPress = (brushColor) => {
    this.setState({
      brushColor: brushColor,
    })
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true }
      const data = await this.camera.takePictureAsync(options)
      this.setState({
        photoPath: data.uri.replace('file://', '')
      })
      console.log(data)
    }
  }
  

  render() {

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>

        {
          this.props.canvasAction === 'plain' &&
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
                ref={ref => this.canvas = ref}
                onSketchSaved={(success, path) => {
                  Alert.alert(success ? 'Image saved!' : 'Failed to save image!', path)
                }}
              />
              <StyledButtonContainer>
                <StyledButtonBottom
                  onPress={() => {
                    console.log(this.canvas)
                    this.canvas.root.save('jpg', false, 'SketchCanvas', String(Math.ceil(Math.random() * 10000000000)), false, false, false)
                  }}           
                >
                  <Text>Save</Text>
                </StyledButtonBottom>
                <StyledButtonBottom
                  onPress={() => {
                    this.canvas.root.clear()
                  }}
                >
                  <Text>Clear canvas</Text>
                </StyledButtonBottom>
                <StyledButtonBottom
                  onPress={() => {
                    this.canvas.root.undo()
                  }}
                >
                  <Text>Undo</Text>
                </StyledButtonBottom>
              </StyledButtonContainer>
            </StyledCanvasContainer>
        }

        {
          this.props.canvasAction === 'camera' &&
          (this.state.photoPath === null ?
            <StyledCameraContainer>
              <RNCamera
                style={{ 
                  flex: 1, 
                  justifyContent: 'flex-end', 
                  alignItems: 'center',
                }}
                ref={ref => this.camera = ref}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
              />
              <View
                style={{ 
                  flex: 0, 
                  flexDirection: 'row', 
                  justifyContent: 'center',
                  width: 411,
                }}
              >
                <TouchableOpacity
                  onPress={this.takePicture.bind(this)}
                  style={{
                    flex: 0,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                    padding: 15,
                    paddingHorizontal: 20,
                    alignSelf: 'center',
                    margin: 20,
                  }}
                >
                  <Text style={{ fontSize: 14 }}>
                    SNAP
                  </Text>
                </TouchableOpacity>
              </View>
            </StyledCameraContainer>
            :
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
                localSourceImage={{
                  filename: this.state.photoPath,
                  mode: 'AspectFit'
                }}
                ref={ref => this.canvas = ref}
                onSketchSaved={(success, path) => {
                  Alert.alert(success ? 'Image saved!' : 'Failed to save image!', path)
                }}
              />
              <StyledButtonContainer>
                <StyledButtonBottom
                  onPress={() => {
                    console.log(this.canvas)
                    this.canvas.root.save('jpg', false, 'SketchCanvas', String(Math.ceil(Math.random() * 10000000000)), true, true, true)
                  }}           
                >
                  <Text>Save</Text>
                </StyledButtonBottom>
                <StyledButtonBottom
                  onPress={() => {
                    this.canvas.root.clear()
                  }}
                >
                  <Text>Clear canvas</Text>
                </StyledButtonBottom>
                <StyledButtonBottom
                  onPress={() => {
                    this.canvas.root.undo()
                  }}
                >
                  <Text>Undo</Text>
                </StyledButtonBottom>
              </StyledButtonContainer>
            </StyledCanvasContainer>
          )
        }

      </View>
    );
  }
}

export { StyledCanvas };
