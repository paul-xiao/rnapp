import React from 'react'
import {
    StyleSheet,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    SectionList
} from 'react-native'
import {
    View,
    Text,
    Icon
} from "native-base";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
      width: '100%',
      padding: 15,
      overflow: 'hidden'
    }, 
    layout: {
        width: '30%',
        padding: 15,
        backgroundColor: 'steelblue',
        margin: 5,
        textAlign: 'center'
    },
    text: {

        color: '#FFF',
        textAlign: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
        padding: 15,
      },
      title: {
        fontSize: 24,
      },
})
const UiFeatures = [{
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
    },
    {
        name: 'FlexLayout',
        link: 'FlexLayoutTest',
        icon: 'refresh'
    }
]

const NativeFeatures = [
    {
        name: 'Camera',
        link: 'Camera',
        icon: 'camera'
    },
    {
        name: 'ImgPicker',
        link: 'ImgPicker',
        icon: 'refresh'
    }
]
const DATA = [{
        title: 'UI API',
        data: UiFeatures
    },
    {
        title: 'Native API',
        data: NativeFeatures
    }
];
 
const Item = ({data, index, navigate}) => {
    // data should be a array
    
        return index === 0 ? (
           <View style={styles.section}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.layout} onPress={() => navigate(item.link)}>
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
           </View>
    ) : null
}


export default FeatureList = ({navigate}) => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <SectionList
            sections={DATA}
            keyExtractor={(title, index) => title + index}
            renderItem={({section, index}) =><Item data={section.data} index={index} navigate={navigate}/>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
          </ScrollView>
        </SafeAreaView>
      );
}