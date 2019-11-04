import React from 'react'
import {
    StyleSheet,
    Picker,
    FlatList
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

export default class PickerList extends React.Component {
       state = {
        language: ''
       }

        render() {
            const nav = () => {
                this.props.navigation.navigate('Home');
            };
            return (
               <Container>
                    <Header title="Post" left={{title: 'Return', nav: nav}} />
                    <View style={styles.container}>
                        <Picker selectedValue={this.state.language}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <Text style={styles.desc}>{this.state.language}</Text>
                    </View>
                    
               </Container>
            )
        }

}