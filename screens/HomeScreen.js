import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Title, Content, List, ListItem, Footer, FooterTab, Icon, Text } from 'native-base';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import BlogItem from '../components/blog/Item';
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postList: {}
        };
        this.getPostList = this.getPostList.bind(this)
    }

    getPostList(){
        fetch('http://192.168.196.75:8080/getpost',
        {
            method: 'get'
      }).then((response) => {
        response.json().then(data => {
            console.log(data)
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
        const _Logout = async() => {

            await AsyncStorage.removeItem('userToken');
            this.props.navigation.navigate('Auth');
    
        }
        const { postList } = this.state
        return (
            <Container>
                <AppHeader title="Home" right={{title: 'Post', nav: nav}} left={{title: 'Logout', nav: _Logout}}/>
                <Content>
                    <BlogItem data={postList}/>
                </Content>
                <AppFooter />
            </Container>
        );
    }
}
