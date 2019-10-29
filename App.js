import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import LoginScreen from './screens/LoginScreen'
import ApiTest from './screens/apiTest'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import Camera from './components/customizeCamera'
import ImgPicker from './components/imgPicker'
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

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  Camera: Camera,
  ImgPicker: ImgPicker,
  ApiTest: ApiTest,
  Post: Post,
  ButtonTest: ButtonTest,
  ActivityIndicatorTest: ActivityIndicatorTest,
  DatePickerIosTest: DatePickerIosTest,
  FlatListTest: FlatListTest,
  ImageTest: ImageTest,
  InputAccessoryViewTest: InputAccessoryViewTest,
  KeyboardAvoidingViewTest: KeyboardAvoidingViewTest,
  MaskedViewTest: MaskedViewTest,
  ModalTest: ModalTest,
  ViewTest: ViewTest
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