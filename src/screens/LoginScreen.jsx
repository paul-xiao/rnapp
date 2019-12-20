import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { Header } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    height: 50,
    width: 250,
    marginTop: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    color: '#FFF',
    marginTop: 15,
    borderRadius: 50,
    height: 50,
    width: 250,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 50,
  },
});

class LoginScreen extends React.Component {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { username, password } = this.state;
    fetch('http://192.168.196.75:8080/signin', {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => {
        response.json().then((data) => {
          if (data.status) {
            this.signInAsync(data.token);
          } else {
            Alert.alert('message', data.msg);
          }
        });
      })
      .catch((err) => {
        Alert.alert('message', err);
      });
  }

  signInAsync = async (token) => {
    const { navigation } = this.props;
    await AsyncStorage.setItem('userToken', token);
    navigation.navigate('App');
  };

  render() {
    const { username, password } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>User Login</Text>
        <TextInput
          value={username}
          onChangeText={(name) => this.setState({ username: name })}
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={(pwd) => this.setState({ password: pwd })}
          style={styles.input}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={this.onLogin}>
          <Text style={styles.buttonText}> Sign in</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
