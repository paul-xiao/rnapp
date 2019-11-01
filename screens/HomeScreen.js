import React, { Component } from 'react';
import { AsyncStorage, FlatList, TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import AppHeader from '../components/common/Header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    layout: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f9c2ff',
        margin: 5,
        textAlign: 'center'
    },
    text: {

        color: '#FFF',
        textAlign: 'center'
    },
})
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postList: {},
            demoList: [{
                name: 'ApiDemo',
                link: 'ApiDemoScreen',
                icon: 'cube'
            },
            {
                name: 'Awesome Features',
                link: 'Components',
                icon: 'bicycle'
            },
            {
                name: 'Redux',
                link: 'Redux',
                icon: 'bonfire'
            }]
        };
        this.getPostList = this.getPostList.bind(this)
    }

    getPostList(){
        fetch('http://192.168.196.75:8080/getpost',
        {
            method: 'get'
      }).then((response) => {
        response.json().then(data => {
            this.setState({
                postList: data
            })
        })
    }).catch(err => {
        console.log(err)
    });
    }
    componentDidMount(){
        this.getPostList()
    }
    render() {
        const nav = () => {
            this.props.navigation.navigate('Post');
        };
        const navigate = (link) => {
            console.log(link)
            this.props.navigation.navigate(link);
        };
        const _Logout = async() => {

            await AsyncStorage.removeItem('userToken');
            this.props.navigation.navigate('Auth');
    
        }
        const { demoList } = this.state
        return (
            <Container>
                <AppHeader title="Home" right={{title: 'Post', nav: nav}} left={{title: 'Logout', nav: _Logout}}/>
                <Content>
                <FlatList
                data={demoList}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.layout} onPress={() => navigate(item.link)}>
                    <View >
                       <Icon name={item.icon} style={styles.text} />
                    </View>
                    <Text style={styles.text} >{item.name}</Text>
                  </TouchableOpacity>
                )}
                //Setting the number of column
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
              />
                </Content>
            </Container>
        );
    }
}
