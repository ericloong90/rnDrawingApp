# rnDrawingApp

This project was bootstrapped using `react-native-cli`.

- [rnDrawingApp](#rndrawingapp)
  - [Dependency](#dependency)
    - [`react-native-sketch-canvas`](#react-native-sketch-canvas)
    - [`react-native-camera`](#react-native-camera)
  - [Running the App](#running-the-app)
  - [Building the App for Production](#building-the-app-for-production)

## Dependency

The core parts of the app consists of the following:

### [`react-native-sketch-canvas`](https://github.com/terrylinla/react-native-sketch-canvas)

This component is responsible to providing the drawing functionality in the app

### [`react-native-camera`](https://github.com/react-native-community/react-native-camera)

This component is responsible to providing the camera functionality in the app. 

## Running the App

The app was mainly built for Android's functionality. In the project directory, you can use the `react-native` CLI tool to run the app in development on your Android device/emulator.

```bash
react-native run-android
```

## Building the App for Production

The build process is carried out using the following script

```bash
./android/gradlew assembleRelease
```

Note that the `keystore` file is exempted from the versioning history. The `keystore` file is required to build this app. Create your own `keystore` file using Facebook React Native's [guide to generate a signing key.](https://facebook.github.io/react-native/docs/signed-apk-android#generating-a-signing-key). Next, place the `keystore` file in the `android/app` folder and make changes to the `gradle.properties` file before building. 