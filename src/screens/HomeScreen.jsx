import React, { Component } from 'react';
import {
  AsyncStorage,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import PropTypes from 'prop-types';
import AppHeader from '../components/common/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f9c2ff',
    margin: 5,
    textAlign: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demoList: [
        {
          name: 'ApiDemo',
          link: 'ApiDemoScreen',
          icon: 'cube',
        },
        {
          name: 'Awesome Features',
          link: 'Components',
          icon: 'bicycle',
        },
        {
          name: 'Redux',
          link: 'Redux',
          icon: 'bonfire',
        },
      ],
    };
    this.getPostList = this.getPostList.bind(this);
  }

  componentDidMount() {
    this.getPostList();
  }

  getPostList() {
    fetch('http://192.168.196.75:8080/getpost', {
      method: 'get',
    })
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            postList: data,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { navigation } = this.props;
    const nav = () => {
      navigation.navigate('Post');
    };
    const Navigate = (link) => {
      navigation.navigate(link);
    };
    const Logout = async () => {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Auth');
    };
    const { demoList } = this.state;
    return (
      <Container>
        <AppHeader
          title="Home"
          right={{ title: 'Post', nav }}
          left={{ title: 'Logout', nav: Logout }}
        />
        <Content>
          <FlatList
            data={demoList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.layout}
                onPress={() => Navigate(item.link)}
              >
                <View>
                  <Icon name={item.icon} style={styles.text} />
                </View>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            )}
            // Setting the number of column
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
