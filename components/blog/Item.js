import React from 'react'
import { StyleSheet, Image, FlatList} from 'react-native'
import { View, Text } from "native-base";

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        marginTop: 10
    },
    img: {
        height:100,
        width:100
    },
    content: {
        flex:1,
        paddingHorizontal: 15
    }
});

export default class BlogItem extends React.Component {
    constructor(props){
        super(props);
    }
    _renderItem({item, index}) {
        return (
            <View style={style.container}>
                <View style={style.img}>
                    <Image style={style.img} source={require("../../assets/x.png")} />
                </View>
                <View style={style.content}><Text>{item.name} {index}</Text></View>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}

