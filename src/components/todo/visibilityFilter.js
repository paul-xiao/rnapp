import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {changeFilter} from '../../store/actions/filter-action';
import { connect } from 'react-redux';
import {ALL, DONE, PENDING} from '../../store/constants';
import { bindActionCreators } from 'redux';
visibilityFilter.propTypes = {
    // props 类型
};


const filters = [ALL, PENDING, DONE]
function visibilityFilter({changeFilter}) {
    const [state, setState] = React.useState(0)                          
    slectItem = (index) => {
        setState(index)
        changeFilter(filters[index])
    }
    const Item = filters.map((item,index) =>  <TouchableOpacity onPress={() => slectItem(index)} style={{borderWidth: state === index ? 1 : 0 }}><Text style={{padding: 15}}>{item}</Text></TouchableOpacity>)
    return (
        <View style={{flex:1, height: 50, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
            {Item}
        </View>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeFilter }, dispatch);
export default connect(null,mapDispatchToProps)(visibilityFilter);