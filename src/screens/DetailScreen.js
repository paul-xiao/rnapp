import React from "react";
import {View, Image, StyleSheet, FlatList, Dimensions} from "react-native";
import { Container } from 'native-base';
const styles = StyleSheet.create({
    container: {
        // alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20
        // alignItems: 'center'
    },
    galleryImageContainer: {
        flex:1,
        height: Dimensions.get('window').width/3,
        margin: 1,
        backgroundColor: '#ccc'
    },
    galleryImage: {
        width: '100%',
        height: Dimensions.get('window').width/3
    },
    btn: {
        flex:0.2,
        justifyContent: 'flex-end'

    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    text: {
        color: 'red'
    }
});
const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ uri: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};
class DetailScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Detail',
        };
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        if (item.empty === true) {
            return <View style={[styles.galleryImageContainer, styles.itemInvisible]} />;
        } else {
            return <View style={styles.galleryImageContainer}>
                <Image source={{uri: item.uri}} style={styles.galleryImage} />
            </View>
        }

    };
    render() {
        const photo = this.props.navigation.getParam('photo') || [];
        return (
            <Container style={styles.container}>
                <FlatList
                    data={formatData(Object.values(photo),3)}
                    numColumns={3}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Container>
        );
    }
}

export default  DetailScreen
