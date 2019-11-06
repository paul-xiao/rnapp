import React from 'react'
import {
    StyleSheet,
    Image,
    FlatList
} from 'react-native'
import {
    View,
    Text,
    Container
} from "native-base";
import Header from '../../components/common/Header'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 200,
      height: 200,
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderColor: 'steelblue',
      borderRadius: 20,
    },
    desc: {
        color: '#757575'
    }
  })

export default class FeatureList extends React.Component {

        render() {
            const nav = () => {
                this.props.navigation.navigate('Home');
            };
            return (
               <Container>
                    <Header title="Post" left={{title: 'Return', nav: nav}} />
                    <View style={styles.container}>
                        <View style={styles.box} />
                        <Text style={styles.desc}>Something like div</Text>
                    </View>
                    
               </Container>
            )
        }

}