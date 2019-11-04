import React from 'react'
import {Button, Footer, FooterTab, Icon, Text} from 'native-base'
export default class AppFooter extends React.Component {

    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>blog</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="navigate" />
                            <Text>gallery</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>todo</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        )
    }
}
