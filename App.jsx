/* eslint-disable global-require */
import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Root } from 'native-base';
import { store, persistor } from './src/store';

import DetailScreen from './src/screens/DetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import ApiDemoScreen from './src/screens/ApiDemoScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import Camera from './src/projects/feature_test/customizeCamera';
import ImgPicker from './src/projects/feature_test/imgPicker';
import Post from './src/projects/blog/Post';
import ViewTest from './src/projects/feature_test/ViewTest';
import ActivityIndicatorTest from './src/projects/feature_test/ActivityIndicatorTest';
import ButtonTest from './src/projects/feature_test/ButtonTest';
import DatePickerIosTest from './src/projects/feature_test/DatePickerIosTest';
import FlatListTest from './src/projects/feature_test/FlatListTest';
import ImageTest from './src/projects/feature_test/ImageTest';
import InputAccessoryViewTest from './src/projects/feature_test/InputAccessoryViewTest';
import KeyboardAvoidingViewTest from './src/projects/feature_test/KeyboardAvoidingViewTest';
import MaskedViewTest from './src/projects/feature_test/MaskedViewTest';
import ModalTest from './src/projects/feature_test/ModalTest';
import PickerTest from './src/projects/feature_test/PickerTest';
import ProgressViewTest from './src/projects/feature_test/UIProgressViewTest';
import RefreshControlTest from './src/projects/feature_test/RefreshControlTest';
import FlexLayoutTest from './src/projects/feature_test/FlexLayoutTest';
import SwipeableFlatListTest from './src/projects/feature_test/SwipeableFlatListTest';

import AxelHome from './src/projects/axel/AxelHome';
import PinAndShare from './src/projects/axel/PinAndShare';
import Chat from './src/projects/chat/Chat';
import List from './src/projects/blog/List';
import Profile from './src/projects/user/ProfileScreen';
import ProfileEdit from './src/projects/user/ProfileEdit';
import ProfileDetail from './src/projects/user/ProfileDetail';
import SignUpScreen from './src/screens/SignUpScreen';

const apiDemoRoute = {
  ButtonTest,
  ActivityIndicatorTest,
  DatePickerIosTest,
  FlatListTest,
  ImageTest,
  InputAccessoryViewTest,
  KeyboardAvoidingViewTest,
  MaskedViewTest,
  ModalTest,
  PickerTest,
  ProgressViewTest,
  RefreshControlTest,
  FlexLayoutTest,
  SwipeableFlatListTest,
  ViewTest,
  Camera,
  ImgPicker,
};

const AppDemo = {
  AxelHome,
  PinAndShare,
  Chat,
};
const AppStack = createStackNavigator(
  {
    Home: List,
    Profile,
    ProfileEdit,
    ProfileDetail,
    Details: DetailScreen,
    Post,
    List,
    SignUpScreen,
    ApiDemoScreen,
    ...apiDemoRoute,
    ...AppDemo,
  },
  {
    headerMode: 'none',
  },
);
const AuthStack = createStackNavigator({
  SignIn: LoginScreen,
});
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const Navigation = createAppContainer(AppNavigator);

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <AppLoading />
            <Navigation />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
