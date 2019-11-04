import React from 'react'
import {Body, Header, Left, Right, Title} from 'native-base'
import { Button } from 'react-native'
export default class AppHeader extends React.Component {
    render() {
        const { title, left ,right} = this.props;
        return (
            <Header>
                <Left>
                {left &&
                <Button onPress={left.nav} title={left.title} />
                }
                </Left>
                <Body>
                <Title>{title}</Title>
                </Body>
                <Right>
                    {right &&
                      <Button onPress={right.nav} title={right.title} />
                    }

                </Right>
            </Header>
        )
    }
}
