import React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import AxelHeader from './AxelHeader';
function PinAndShare(props) {
    return (
        <SafeAreaView>
            <AxelHeader title="PinAndShare" type="primary"/>
            <View>
            <Text>111</Text>
        </View>
        </SafeAreaView>
    );
}

export default PinAndShare;