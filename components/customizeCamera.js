import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, CameraRoll} from 'react-native';
import { Container, Toast } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Camera, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';
const styles = StyleSheet.create({
    cameraBtn: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 30,
      marginBottom: 10,
      borderWidth: 4,
      borderColor: "#CCC"
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#FFF',
        textAlign: 'center'
    },
    Icon: {
        marginBottom: 10,
        color: '#FFF',
        textAlign: 'center'
    }

});
export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flashMode: 'off',
        captures: [],
        capturing: false,
        isCameraReady: false
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleCameraReady() {
        this.setState({
            isCameraReady: true,
        });
    }
    snap = async () => {
        const {capturing} = this.state;
        console.log('capturing',capturing);
        if (this.camera && !capturing) {
            let photo = await this.camera.takePictureAsync();
            // let video = await this.camera.recordAsync();
            CameraRoll.saveToCameraRoll(photo.uri, 'photo');
            this.setState({capturing: true, captures: [photo, ...this.state.captures] });
            const {captures} = this.state;
            await this.props.navigation.navigate('Details', {photo: captures});
            this.setState({capturing: false});
        }
    };

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <Container>
                <View style={{ flex: 1, backgroundColor: '#000' }}>
                    <Camera
                        onCameraReady={this.handleCameraReady.bind(this)}
                        style={{ flex: 1 }} type={this.state.type}
                        flashMode={this.state.flashMode === 'on' ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                        ref={ref => { this.camera = ref; }}>
                        <Grid
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                            }}>
                            <Row  style={{
                                flex:0.2,
                                alignItems: 'center',
                                backgroundColor: 'transparent'
                            }}>
                                <Col>
                                    <Ionicons name="md-settings" size={32} color="white" style={styles.Icon}/>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <Ionicons name={this.state.isCameraReady && this.state.flashMode !== 'off' ? "md-flash": "md-flash-off"} size={32} color="white" style={styles.Icon}
                                              onPress={() => {
                                                  this.setState({
                                                      flashMode: this.state.isCameraReady && this.state.flashMode === 'on'
                                                          ? 'off'
                                                          : 'on'
                                                  });
                                                  console.log(this.state.flashMode)
                                              }}
                                    />
                                </Col>
                                <Col>
                                    <Ionicons name="md-recording" size={32} color="white" style={styles.Icon}/>
                                </Col>
                            </Row>
                            <Row style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                            }} />
                            <Row  style={{
                                flex:0.2,
                                alignItems: 'center',
                                backgroundColor: 'transparent'
                            }}>
                                <Col>
                                    <TouchableOpacity
                                    onPress={() => {
                                        this.setState({
                                            type: this.state.type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back,
                                        });
                                    }}>
                                    <Ionicons name="md-reverse-camera" size={32} color="white"  style={styles.Icon}/>
                                </TouchableOpacity>
                                </Col>
                                <Col style={{alignItems: 'center'}}>
                                    <TouchableOpacity style={styles.cameraBtn} onPress={() => this.snap()}/>
                                </Col>
                                <Col>
                                    <Text style={styles.text} onPress={() => this.props.navigation.navigate('Details')}>
                                        <Ionicons name="md-return-right" size={32} color="white"  style={styles.Icon}/>
                                    </Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Camera>
                </View>
                </Container>
            );
        }
    }
}
