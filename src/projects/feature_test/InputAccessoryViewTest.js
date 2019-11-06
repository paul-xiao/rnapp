import React, { Component } from 'react';
import { View, ScrollView, TextInput, InputAccessoryView, Button, Text, KeyboardAvoidingView } from 'react-native';
import commonStyle from '../../styles/commonStyles'

export default class InputAccessoryViewTest extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Placeholder Text'};
  }

  render() {
    const inputAccessoryViewID = "uniqueID";
    return (
     <KeyboardAvoidingView style={commonStyle.container} behavior="padding" enabled>
      <View>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={{
              padding: 10,
              paddingTop: 50,
              borderWidth: 1
            }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={commonStyle.desc} >A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.</Text>
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button
            onPress={() => this.setState({text: 'Placeholder Text'})}
            title="Reset Text"
          />
        </InputAccessoryView>
      </View>
      </KeyboardAvoidingView>
    );
  }
}
