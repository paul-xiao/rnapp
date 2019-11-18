import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from '../../styles/variables';
const styles = StyleSheet.create({
    header: {
      height: 60,
      backgroundColor: COLORS.theme1,
      flexDirection: 'row',
      position: 'relative'
    },
    return: {
        width: 60,
        height: 60,
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    title_txt: {
        color: COLORS.white,
        fontSize: 20
    },
    sort: {
        width: 40,
        height: 60,
        position: 'absolute',
        right: 50,
        top: 0,
        justifyContent:'center',
        alignItems: 'center',
    },
    query: {
        width: 40,
        height: 60,
        position: 'absolute',
        right: 10,
        top: 0,
        justifyContent:'center',
        alignItems: 'center',
    },
    upload: {
        height: 60,
        position: 'absolute',
        right: 10,
        top: 0,
        justifyContent:'center',
        alignItems: 'center',
    },
    upload_txt: {
        color: COLORS.white,
        fontSize: 20
    }
})
/* 
* type
* defaut : not right button
* primary: only one button with TXT
* secondary: only one button with TXT
*/ 
function AxelHeader({title, type}) {
    const [state, setState] = React.useState({
        language: ''
    })
    return (
        <View style={styles.header}>
            <View style={styles.return}>
                <TouchableOpacity>
                <Ionicons name="md-arrow-back" size={30} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
             {type !== 'primary' ?  <TouchableOpacity>
              <Text style={styles.title_txt}>{title}</Text>
            </TouchableOpacity> : <Picker selectedValue={state.language}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) =>
                                setState({language: itemValue})
                            }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>}
            </View>
            {type === 'secondary' && <View style={styles.sort}>
               <TouchableOpacity>
                <Ionicons name="md-list" size={30} color="#FFF" />
              </TouchableOpacity>
            </View>
            }
            {type === 'secondary' &&  <View style={styles.query}>
            <TouchableOpacity>
              <Ionicons name="md-search" size={30} color="#FFF" />
              </TouchableOpacity>
            </View>}
           {type === 'primary' &&  <View style={styles.upload}>
           <TouchableOpacity>
              <Text style={styles.upload_txt}>Upload</Text>
              </TouchableOpacity>
            </View>}
        </View>
    );
}

export default AxelHeader;