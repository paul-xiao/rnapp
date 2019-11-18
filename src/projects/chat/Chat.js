import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import client from 'socket.io-client';

const styles = StyleSheet.create({
    container: {
       flex: 1
    },
    main: {
      flex: 1
    },
    input_wrap: {
        height: 60,
        borderTopWidth: 1,
        borderTopColor: 'lightblue',
        flexDirection: 'row'
    },
    input: {
        height: 60,
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16
    },
    input_btn: {
        height: 60,
        width: 60,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


function Chat(props) {
    const [state, setState] = useState('not connected')

    send = (msg) => {
        console.log(msg)
        const socket = client.connect('http://localhost:8080');
        socket.emit('my other event', { msg: msg });
    }
    useEffect(() => {
        // replace both componentDidMount and componentDidUpdat
        const socket = client.connect('https://bc755403.ngrok.io');
        console.log('connecting...')
        console.log('...')
        console.log('...')
        socket.on('news', function (data) {
            console.log('connected');
            socket.emit('my other event', {
                my: 'data'
            });
        });
        socket.on('connect', function (socket) {
            console.log('Connected!');
        });
    },[])
    return (
        <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.main}>
                <Text>{state}</Text>
            </View>
            <View style={styles.input_wrap}>
                <TextInput style={styles.input} placeholder="say something" />
                <View style={styles.input_btn}>
                    <TouchableOpacity onPress={() => send(state)}>
                    <Ionicons name="md-send" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Chat;