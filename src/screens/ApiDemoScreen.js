import React, { Component } from 'react';
import { Container,Content} from 'native-base';
import Header from '../components/common/Header';
import FeatureList from '../components/feature_test/FeatureList';
export default class ApiDemoScreen extends Component {
    render() {
        const goBack = () => {
            this.props.navigation.goBack();
        };
        const navigate = (link) => {
            this.props.navigation.navigate(link);
        };
        return (
            <Container>
                 <Header title="ApiDemos" left={{title: 'Return', nav: goBack}} />
                <Content>
                    <FeatureList navigate={navigate}/>
                </Content>
            </Container>
        );
    }
}
