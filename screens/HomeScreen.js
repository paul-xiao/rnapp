import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Title, Content, List, ListItem, Footer, FooterTab, Icon, Text } from 'native-base';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import BlogItem from '../components/blog/Item';
export default class HomeScreen extends Component {
    render() {
        const nav = () => {
            this.props.navigation.navigate('Post');
        };
        const _Logout = async() => {

            await AsyncStorage.removeItem('userToken');
            this.props.navigation.navigate('Auth');
    
        }
        return (
            <Container>
                <AppHeader title="Home" right={{title: 'Post', nav: nav}} left={{title: 'Logout', nav: _Logout}}/>
                <Content>
                    <BlogItem data={[{name: 'paul1111'},{name: 'paul'}]}/>
                </Content>
                <AppFooter />
            </Container>
        );
    }
}
