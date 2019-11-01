import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import LoginScreen from './screens/LoginScreen'
import ApiDemoScreen from './screens/ApiDemoScreen'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import Camera from './components/feature_test/customizeCamera'
import ImgPicker from './components/feature_test/imgPicker'
import Post from './components/blog/Post'
import ViewTest from './components/feature_test/ViewTest'
import ActivityIndicatorTest from './components/feature_test/ActivityIndicatorTest'
import ButtonTest from './components/feature_test/ButtonTest'
import DatePickerIosTest from './components/feature_test/DatePickerIosTest'
import FlatListTest from './components/feature_test/FlatListTest'
import ImageTest from './components/feature_test/ImageTest'
import InputAccessoryViewTest from './components/feature_test/InputAccessoryViewTest'
import KeyboardAvoidingViewTest from './components/feature_test/KeyboardAvoidingViewTest'
import MaskedViewTest from './components/feature_test/MaskedViewTest'
import ModalTest from './components/feature_test/ModalTest'
import PickerTest from './components/feature_test/PickerTest'
import ProgressViewTest from './components/feature_test/UIProgressViewTest'
import RefreshControlTest from './components/feature_test/RefreshControlTest'
import FlexLayoutTest from './components/feature_test/FlexLayoutTest'

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
  ViewTest: ViewTest,
  Camera: Camera,
  ImgPicker: ImgPicker,
}

import TodoApp from './components/todo'
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

const app = createAppContainer(AppNavigator);

export default app;