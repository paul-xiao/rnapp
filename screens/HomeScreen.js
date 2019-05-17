import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Content, List, ListItem, Footer, FooterTab, Icon, Text } from 'native-base';
import AppFooter from '../components/Footer';
import AppHeader from '../components/Header';
import BlogItem from '../components/blog/Item';
export default class HomeScreen extends Component {

    render() {
        const nav = () => {
            this.props.navigation.navigate('Post');
        };
        return (
            <Container>
                <AppHeader title="Home" left={{title: 'Post', nav: nav}}/>
                <Content>
                    <BlogItem data={[{name: 'paul'},{name: 'paul'}]}/>
                </Content>
                <AppFooter />
            </Container>
        );
    }
}
