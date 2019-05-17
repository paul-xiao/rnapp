import React from 'react'
import {View, TextInput, StyleSheet, Button, Image} from "react-native";
import { Container } from "native-base";
import Header from '../Header'
import {ImagePicker, Permissions} from "expo";

const styles = StyleSheet.create({
    textBox: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        height: 200,
        width: 300,
        marginVertical: 15,
        alignItems: 'flex-start'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

    render() {
        const nav = () => {
            this.props.navigation.navigate('Home');
        };
        const {text, photo} = this.state;

        const ImgView = () => {
            if(!photo) return;
            return (
                    <View>
                        <Image style={styles.textBox} source={{uri: photo.uri}}/>
                        <TextInput
                            onChangeText={(text) => this.setState({text})}
                            value={text}/>
                    </View>
                )
        };
        return (
            <Container>
                <Header title="Post" left={{title: 'Return', nav: nav}}/>
                <View style={styles.content}>
                    {ImgView}
                    <Button onPress={this._takePicture.bind(this)} title="take a picture"/>
                    <Button onPress={this._choosePicture.bind(this)} title="choose from photo"/>
                </View>
            </Container>
        )
    }
}

