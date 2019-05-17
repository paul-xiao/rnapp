import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert, TouchableOpacity, AsyncStorage} from "react-native";
import { Header } from 'native-base'

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
        justifyContent: 'center'
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
      color: "#FFF",
      textAlign: 'center',
      lineHeight: 50
    }
});

class LoginScreen extends React.Component {
    static navigationOptions = () => {
        return {
            header: null
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const { username, password } = this.state;
        const { navigate } = this.props.navigation;
        fetch('http://192.168.196.75:4000/signin',
            {
                method: 'post',
                body: JSON.stringify({username, password}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
          }).then((response) => {
            response.json().then(data => {
                if (data.success) {
                    console.log(data);
                    this._signInAsync(data.token)
                } else {
                    Alert.alert('message', data.msg)
                }
            })
        }).catch(err => {
            console.log(err)
        });
    }

    _signInAsync = async (token) => {
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate('App');
    };
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text>User Login</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    style={styles.input}
                    placeholder="Username"
                />
                <TextInput
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    style={styles.input}
                    placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onLogin.bind(this)}
                >
                    <Text style={styles.buttonText}> Sign in </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default  LoginScreen
