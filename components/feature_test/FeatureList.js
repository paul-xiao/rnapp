import React from 'react'
import {
    StyleSheet,
    Image,
    FlatList,
    Alert,
    TouchableOpacity,
    Button
} from 'react-native'
import {
    View,
    Text,
    Icon
} from "native-base";
import RefreshControlTest from './RefreshControlTest'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    layout: {
        flex: 1,
        padding: 25,
        backgroundColor: 'steelblue',
        margin: 5,
        textAlign: 'center'
    },
    text: {

        color: '#FFF',
        textAlign: 'center'
    },
})
const featrueList = [{
        name: 'ActivityIndicator',
        link: 'ActivityIndicatorTest',
        icon: 'baseball'
    }, {
        name: 'Button',
        link: 'ButtonTest',
        icon: 'basket'
    }, {
        name: 'DatePickerIos',
        link: 'DatePickerIosTest',
        icon: 'calendar'
    },
    {
        name: 'FlatList',
        link: 'FlatListTest',
        icon: 'list'
    }, {
        name: 'Image',
        link: 'ImageTest',
        icon: 'image'
    }, {
        name: 'InputAccessory',
        link: 'InputAccessoryViewTest',
        icon: 'hourglass'
    }, {
        name: 'KeyboardAvoidingView',
        link: 'KeyboardAvoidingViewTest',
        icon: 'keypad'
    }, {
        name: 'MaskedView',
        link: 'MaskedViewTest',
        icon: 'magnet'
    }, {
        name: 'Modal',
        link: 'ModalTest',
        icon: 'medal'
    },
    {
        name: 'Picker',
        link: 'PickerTest',
        icon: 'easel'
    },
    {
        name: 'ProgressView',
        link: 'ProgressViewTest',
        icon: 'disc'
    },
    {
        name: 'RefreshControl',
        link: 'RefreshControlTest',
        icon: 'refresh'
    }
]
export default class FeatureList extends React.Component {
        render() {
            const { navigator } = this.props;
            return (
                <FlatList
                data={featrueList}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.layout} onPress={() => navigator.push({
                      title:'test',
                      index: 0,
                      component:RefreshControlTest
                  })}>
                    <View >
                       <Icon name={item.icon} style={styles.text} />
                    </View>
                    <Text style={styles.text} >{item.name}</Text>
                  </TouchableOpacity>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
            )
        }

}