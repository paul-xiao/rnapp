import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  View
} from 'react-native';
import commonStyle from '../../styles/commonStyles'
export default class KeyboardAvoidingViewTest extends Component {
  state = {
	behavior: 'padding',
  };
  render() {
	return (
	  <View style={styles.container}>
		 <KeyboardAvoidingView behavior="padding" style={styles.container}>
			<TextInput
			  underlineColorAndroid={'#ffffff'}
			  placeholder="这里是一个简单的输入框"
			  style={styles.textInput} />
              <Text style={commonStyle.desc}>Note: Android and iOS both interact with this prop differently. Android may behave better when given no behavior prop at all, whereas iOS is the opposite.</Text>
		 </KeyboardAvoidingView>
	  </View>
	);
  }
}
const styles = StyleSheet.create({
   container: {
	flex: 1,
	backgroundColor:'white',
	justifyContent: 'center',
	paddingHorizontal: 20,
	paddingTop: 20,
  },
  textInput: {
	borderRadius: 5,
	borderWidth: 1,
	height: 140,
	paddingHorizontal: 10,
  },
});