import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import moment from 'moment'

export default class DatePickerIosTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showDatePicker: false 
        }
    }

    render() {
        var showDatePicker = this.state.showDatePicker ?
            <DatePickerIOS
                style={{ height: 150 }}
                date={this.state.date} onDateChange={(date)=>this.setState({date})}
                mode="date"/> : <View />
        return (
            <TouchableOpacity style={styles.container} activeOpacity="1" onPress={() => this.setState({showDatePicker: false})}>
            <View style={styles.container}>
                <Text>Visit Date</Text>
                <TouchableOpacity style={{height: 40, lineHeight: 40, width: '100%', padding: 4, borderColor: 'gray', borderWidth: 1}}
                                  onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
                    <Text>{moment(this.state.date).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>
                {showDatePicker}
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15
  },
  txt: {
      color: 'red'
  }
});