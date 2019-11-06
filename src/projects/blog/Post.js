import React from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity} from "react-native";
import { Container } from "native-base";
import Header from '../../components/common/Header'
import {ImagePicker, Permissions} from "expo";

const styles = StyleSheet.create({
    postBox: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        marginBottom: 20
    },
    imageBox: {
        height: 200,
        width: 300,
        marginVertical: 15,
        alignItems: 'flex-start'
    },
    textBox: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        height: 50,
        lineHeight: 50,
        width: 300,
        marginVertical: 15,
        alignItems: 'flex-start'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

const options = {
    allowsEditing: true
};
export default class Post extends React.Component {
    state = {
        text: '',
        photo: '',
        hasCameraPermission: false
    };

    async _takePicture() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });

        const { hasCameraPermission } = this.state;

        if (hasCameraPermission) {
            const result = await ImagePicker.launchCameraAsync(options);
            this.setState({photo: result})
        }
    }
    async _choosePicture() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: status === 'granted' });
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission) {
            const result = await ImagePicker.launchImageLibraryAsync(options);
            this.setState({photo: result})
        }
    }
    onSubmit() {
        console.log(this.state.photo)
        console.log(this.state.text)
        let formData = new FormData()
        formData.append('photo', this.state.photo)
        formData.append('desc', this.state.text)
        fetch('http://192.168.196.75:8080/savepost',
            {
                method: 'post',
                body: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
          }).then((response) => {
            response.json().then(data => {
               console.log(data.message)
            })
        }).catch(err => {
            console.log(err)
        });
    }
    render() {
        const nav = () => {
            this.props.navigation.navigate('Home');
        };
        const {text, photo} = this.state;

        const ImgView = () => {
            if(!photo) return;
            return (
                    <View style={styles.postBox}>
                        <Image style={styles.imageBox} source={{uri: photo.uri}}/>
                        <TextInput
                            style={styles.textBox}
                            onChangeText={(text) => this.setState({text})}
                            value={text}/>
                    </View>
                )
        };
        return (
            <Container>
                <Header title="Post" right={{title: 'Return', nav: nav}} />
                <View style={styles.content}>
                    {ImgView()}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onSubmit.bind(this)}>
                        <Text style={styles.buttonText}> Submit </Text>
                    </TouchableOpacity>
                    <Button onPress={this._takePicture.bind(this)} title="take a picture"/>
                    <Button onPress={this._choosePicture.bind(this)} title="choose from photo"/>
                </View>
            </Container>
        )
    }
}

