import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import commonStyles from '../../styles/commonStyles'

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          style={commonStyles.model}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={commonStyles.modelContainer}>
            <View style={commonStyles.modelContent}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                style={commonStyles.modelOptions}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={commonStyles.button}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}