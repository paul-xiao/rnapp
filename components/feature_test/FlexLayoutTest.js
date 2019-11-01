import React from 'react'
import { View, Text } from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    innerWrap: {
        height:300,
        backgroundColor: 'lightblue',
        padding:15,
        flexDirection: 'row'
    },
    inner: {
        flex:1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    title:{
        fontSize: 20
    }
})
export default FlexLayoutTest = () => {
  return(
      <SafeAreaView style={styles.container}>
          <View style={styles.innerWrap}>
            <View style={styles.inner}>
                <Text style={styles.title}>
                    this is a TodoApp1
                </Text>
            </View>
            <View style={styles.inner}>
                <Text style={styles.title}>
                    this is a TodoApp2
                </Text>
            </View>
            <View style={styles.inner}>
                <Text style={styles.title}>
                    this is a TodoApp2
                </Text>
            </View>
        </View>
      </SafeAreaView>
  )
}