import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native'
import commonStyles from '../styles/commonStyles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Form = ({ children, title }) => {
    return (
        <View style={commonStyles.form}>
            <Text style={commonStyles.form_title}>{title}</Text>
            {children}
        </View>
    )
}
const FormItem = ({ children }) => {
    return (
        <View style={commonStyles.form_item}>
            {children}
        </View>
    )
}
const SignUpScreen = ({ navigation }) => {
    const initState = {
        username: '',
        password: ''
    }
    const [state, setState] = useState(initState)

    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    const handleSubmit = () => {
        const { username, password } = state
        fetch('http://192.168.196.75:8080/signup', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then((response) => {
                response.json().then((data) => {
                    if (data.status) {
                        Alert.alert('message', "Signup Success !");
                    } else {
                        Alert.alert('message', data.message);
                    }
                    setState(initState)

                });
            })
            .catch((err) => {
                Alert.alert('message', err);
            });
    }
    const { username, password } = state

    return (
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <KeyboardAvoidingView behavior="padding" style={commonStyles.container}>
                <View style={commonStyles.flexCenter}>
                    <Form title="Sign Up">
                        <FormItem>
                            <TextInput style={commonStyles.form_item_input} value={username} placeholder="Username" onChangeText={(name) => setState({ ...state, username: name })} />
                        </FormItem>
                        <FormItem>
                            <TextInput style={commonStyles.form_item_input} secureTextEntry value={password} placeholder="Password" onChangeText={(password) => setState({ ...state, password })} />
                        </FormItem>
                        <FormItem>
                            <TouchableOpacity style={commonStyles.form_item_btn} onPress={handleSubmit}>
                                <Text style={commonStyles.form_item_btn_text}>Sign Up</Text>
                            </TouchableOpacity>
                        </FormItem>
                    </Form>
                    <TouchableOpacity style={commonStyles.form_item_btn} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={commonStyles.form_item_btn_text}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignUpScreen
