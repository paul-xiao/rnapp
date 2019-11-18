import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from 'react-redux'
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react'


import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'
import LoginScreen from './src/screens/LoginScreen'
import ApiDemoScreen from './src/screens/ApiDemoScreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'
import Camera from './src/projects/feature_test/customizeCamera'
import ImgPicker from './src/projects/feature_test/imgPicker'
import Post from './src/projects/blog/Post'
import ViewTest from './src/projects/feature_test/ViewTest'
import ActivityIndicatorTest from './src/projects/feature_test/ActivityIndicatorTest'
import ButtonTest from './src/projects/feature_test/ButtonTest'
import DatePickerIosTest from './src/projects/feature_test/DatePickerIosTest'
import FlatListTest from './src/projects/feature_test/FlatListTest'
import ImageTest from './src/projects/feature_test/ImageTest'
import InputAccessoryViewTest from './src/projects/feature_test/InputAccessoryViewTest'
import KeyboardAvoidingViewTest from './src/projects/feature_test/KeyboardAvoidingViewTest'
import MaskedViewTest from './src/projects/feature_test/MaskedViewTest'
import ModalTest from './src/projects/feature_test/ModalTest'
import PickerTest from './src/projects/feature_test/PickerTest'
import ProgressViewTest from './src/projects/feature_test/UIProgressViewTest'
import RefreshControlTest from './src/projects/feature_test/RefreshControlTest'
import FlexLayoutTest from './src/projects/feature_test/FlexLayoutTest'
import SwipeableFlatListTest from './src/projects/feature_test/SwipeableFlatListTest'

const apiDemoRoute = {
  ButtonTest: ButtonTest,
  ActivityIndicatorTest: ActivityIndicatorTest,
  DatePickerIosTest: DatePickerIosTest,
  FlatListTest: FlatListTest,
  ImageTest: ImageTest,
  InputAccessoryViewTest: InputAccessoryViewTest,
  KeyboardAvoidingViewTest: KeyboardAvoidingViewTest,
  MaskedViewTest: MaskedViewTest,
  ModalTest: ModalTest,
  PickerTest: PickerTest,
  ProgressViewTest: ProgressViewTest,
  RefreshControlTest: RefreshControlTest,
  FlexLayoutTest: FlexLayoutTest,
  SwipeableFlatListTest: SwipeableFlatListTest,
  ViewTest: ViewTest,
  Camera: Camera,
  ImgPicker: ImgPicker,
}

import TodoApp from './src/projects/todo'
import AxelHome from './src/projects/axel/AxelHome'
import PinAndShare from './src/projects/axel/PinAndShare'
import Chat from './src/projects/chat/Chat'
const AppDemo = {
  AxelHome: AxelHome,
  PinAndShare: PinAndShare,
  Chat: Chat,
}
const AppStack = createStackNavigator({
  Home: Chat,
  Details: DetailScreen,
  Post: Post,
  ApiDemoScreen: ApiDemoScreen,
  ...apiDemoRoute,
  ...AppDemo
}, {
  headerMode: 'none'
});
const AuthStack = createStackNavigator({
  SignIn: LoginScreen
});
const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});

const Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}