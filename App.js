import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Expo from 'expo';
async function getToken() {
  // Remote notifications do not work in simulators, only on device
  console.log(Expo.Constants.isDevice)
  if (!Expo.Constants.isDevice) {
    return;
  }
  let { status } = await Expo.Permissions.askAsync(
      Expo.Permissions.NOTIFICATIONS,
  );
  console.log(status)
  if (status !== 'granted') {
    return;
  }
  let value = await Expo.Notifications.getExpoPushTokenAsync();
  alert(value);
  console.log('11111111111111111111');
  console.log(value);
  /// Send this to a server
  return fetch('http://192.168.196.75:4000/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: value,
      name: 'paultest'
    }),
  });
}
export default class App extends React.Component {
  componentDidMount() {
    getToken()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Paul</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
