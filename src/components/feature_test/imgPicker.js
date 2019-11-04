import React, {Component} from 'react'
import {View, Button, Text} from "native-base";
import {StyleSheet} from "react-native";
import { ImagePicker, Permissions } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        margin: 15,
    }
});

const options = {
    allowsEditing: true
};

export default class ImagePickerDemo extends Component {
    state = {
        hasCameraPermission: false
    };

    async componentDidMount() {

    }

    async _takePicture() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });

        const { hasCameraPermission } = this.state;

        if (hasCameraPermission) {
            const result = await ImagePicker.launchCameraAsync(options);
            console.log(result)
        }
    }
    async _choosePicture() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: status === 'granted' });
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission) {
            const result = await ImagePicker.launchImageLibraryAsync(options);
            console.log(result)
        }
    }

    render() {
       return (
           <View style={styles.container}>
               <Button onPress={this._choosePicture.bind(this)} style={styles.btn}>
                   <Text>choose from photo</Text>
               </Button>
               <Button onPress={this._takePicture.bind(this)} style={styles.btn}>
                   <Text>take from camera</Text>
               </Button>
           </View>
           )

       }
}
