
import React, {Component} from 'react';
import {
  ProgressViewIOS,
  StyleSheet,
  View,
} from 'react-native';

export default class ProgressViewIOSTest extends React.Component {

  state = {
      progress: 0
  }

  componentDidMount() {
    this.updateProgress();
  }

  updateProgress() {
    var progress = this.state.progress + 0.01;
    this.setState({ progress });
   requestAnimationFrame(() => this.updateProgress());
  }

  getProgress(offset) {
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS style={styles.progressView} progress={this.getProgress(0)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={this.getProgress(0.2)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progressViewStyle="bar" progress={this.getProgress(0.4)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progressViewStyle="bar" progress={this.getProgress(0.8)}/>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    marginTop: -20,
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 20,
  }
});