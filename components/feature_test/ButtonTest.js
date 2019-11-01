import React from 'react'
import {
    StyleSheet,
    Alert,
    Button
} from 'react-native'
import {
    View,
    Text,
    Container
} from "native-base";
import Header from '../common/Header'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'red'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373'
    },
  });

export default class ButtonTest extends React.Component {

        render() {
            const nav = () => {
                this.props.navigation.navigate('Home');
            };
            return (
               <Container>
                    <Header title="Post" left={{title: 'Return', nav: nav}} />
                    <View style={styles.container}>
                        <Button title="Press Me" style={styles.fixToText} color="#f194ff"  onPress={() =>  Alert.alert('message', 'Pressed')}/>
                        <Button title="Press Me" style={styles.fixToText} disabled onPress={() =>  Alert.alert('message', 'Pressed')} />
                        <Button title="Press Me" style={styles.fixToText} onPress={() =>  Alert.alert('message', 'Pressed')} />
                    </View>
                    
               </Container>
            )
        }

}