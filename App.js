import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from 'react-redux'

import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'
import LoginScreen from './src/screens/LoginScreen'
import ApiDemoScreen from './src/screens/ApiDemoScreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'
import Camera from './src/components/feature_test/customizeCamera'
import ImgPicker from './src/components/feature_test/imgPicker'
import Post from './src/components/blog/Post'
import ViewTest from './src/components/feature_test/ViewTest'
import ActivityIndicatorTest from './src/components/feature_test/ActivityIndicatorTest'
import ButtonTest from './src/components/feature_test/ButtonTest'
import DatePickerIosTest from './src/components/feature_test/DatePickerIosTest'
import FlatListTest from './src/components/feature_test/FlatListTest'
import ImageTest from './src/components/feature_test/ImageTest'
import InputAccessoryViewTest from './src/components/feature_test/InputAccessoryViewTest'
import KeyboardAvoidingViewTest from './src/components/feature_test/KeyboardAvoidingViewTest'
import MaskedViewTest from './src/components/feature_test/MaskedViewTest'
import ModalTest from './src/components/feature_test/ModalTest'
import PickerTest from './src/components/feature_test/PickerTest'
import ProgressViewTest from './src/components/feature_test/UIProgressViewTest'
import RefreshControlTest from './src/components/feature_test/RefreshControlTest'
import FlexLayoutTest from './src/components/feature_test/FlexLayoutTest'
import SwipeableFlatListTest from './src/components/feature_test/SwipeableFlatListTest'

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

import TodoApp from './src/components/todo'
const AppDemo = {
  TodoApp: TodoApp
}
const AppStack = createStackNavigator({
  Home: TodoApp,
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
        <Navigation />
      </Provider>
    );
  }
}