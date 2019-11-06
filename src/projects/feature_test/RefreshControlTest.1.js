import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default class RefreshControlTest extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        refreshing: false
      }
      this.setRefreshing = this.setRefreshing.bind(this)
      this.onRefresh = this.onRefresh.bind(this)
  }
  setRefreshing(bol){
    this.setState({
        refreshing: bol
    })
  }
  onRefresh = () => {
    this.setRefreshing(true);
    wait(2000).then(() => this.setRefreshing(false));
  }

  render(){
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
            }
          >
            <Text>Pull down to see RefreshControl indicator</Text>
          </ScrollView>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
