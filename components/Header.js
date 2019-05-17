import React from 'react'
import {Body, Header, Left, Right, Title} from 'native-base'
import { Button } from 'react-native'
export default class AppHeader extends React.Component {
    render() {
        const { title, left } = this.props;
        return (
            <Header>
                <Left/>
                <Body>
                <Title>{title}</Title>
                </Body>
                <Right>
                    {left &&
                      <Button onPress={left.nav} title={left.title} />
                    }

                </Right>
            </Header>
        )
    }
}
