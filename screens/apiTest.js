import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right, Content, List, ListItem, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class ApiTest extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                    <Title>API Test</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Camera</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Camera')}>
                            <Text>Open Camera</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('ImgPicker')}>
                            <Text>Image Pick</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>B</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bradley Horowitz</Text>
                        </ListItem>
                    </List>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon active name="apps" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>News</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="navigate" />
                            <Text>gallery</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
