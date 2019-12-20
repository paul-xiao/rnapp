import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform
} from "react-native";
import { Icon } from "native-base";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import Header from "../../components/common/Header";
import commonStyles from "../../styles/commonStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  postBox: {
    marginBottom: 20,
    alignSelf: "stretch",
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1
  },
  textBox: {
    fontSize: 20,
    padding: 15,
    alignSelf: "stretch"
  },
  attaches: {
    borderColor: "#f2f2f2",
    borderWidth: 1,
    padding: 15,
    alignSelf: "stretch"
  },
  imageBox: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    alignItems: "flex-start"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon: {
    color: "#FFF"
  }
});

const options = {
  allowsEditing: true
};

export default function Post({ navigation }) {
  const initialState = {
    text: "",
    photo: "",
    hasCameraPermission: false
  };
  const [state, setState] = useState(initialState);
  const nav = () => {
    navigation.navigate("Home");
  };
  const { source } = navigation.state.params || {
    uri: "https://facebook.github.io/react-native/img/tiny_logo.png"
  };
  const onSubmit = () => {
    const { photo, text } = state;
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("desc", text);
    fetch("http://192.168.196.75:8080/savepost", {
      method: "post",
      body: formData,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(response => {
        response.json().then(data => {
          console.log(data.message);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setState({ ...state, photo: source });
  }, []);

  const RenderHeaderLeft = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" style={commonStyles.icon} />
    </TouchableOpacity>
  );
  const RenderHeaderRight = () => (
    <View>
      <Button title="Save" onPress={onSubmit} />
    </View>
  );
  const { photo, text } = state;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Post"
        left={<RenderHeaderLeft />}
        right={<RenderHeaderRight />}
      />
      <View style={styles.content}>
        <View style={styles.postBox}>
          <TextInput
            value={text}
            onChangeText={txt => {
              setState({ ...state, text: txt });
            }}
            style={styles.textBox}
            placeholder="wirte something"
            multiline
          />
          <View style={styles.attaches}>
            <Image
              style={styles.imageBox}
              source={{
                uri: photo
                  ? photo.uri
                  : "https://facebook.github.io/react-native/img/tiny_logo.png"
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

Post.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
