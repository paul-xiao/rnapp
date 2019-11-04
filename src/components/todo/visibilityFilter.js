import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

visibilityFilter.propTypes = {
    // props 类型
};


const filters = ['All', 'Pending', 'Done']
function visibilityFilter(props) {
    const [state, setState] = React.useState(0)                          
    slectItem = (index) => {
        setState(index)
    }
    const Item = filters.map((item,index) =>  <TouchableOpacity onPress={() => slectItem(index)} style={{borderWidth: state === index ? 1 : 0 }}><Text style={{padding: 15}}>{item}</Text></TouchableOpacity>)
    return (
        <View style={{flex:1, height: 50, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
            {Item}
        </View>
    );
}

export default visibilityFilter;