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

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  Camera: Camera,
  ImgPicker: ImgPicker,
  ApiTest: ApiTest,
  Post: Post
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