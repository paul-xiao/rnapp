import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { View, Text, Icon, ActionSheet, Content } from "native-base";
import { SafeAreaView } from "react-navigation";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import commonStyles from "../../styles/commonStyles";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
const BUTTONS = ["拍摄", "从相册选取", "取消"];
const DESTRUCTIVE_INDEX = 4;
const CANCEL_INDEX = 2;
const options = {
  allowsEditing: true
};

const RenderItem = ({ item, index }) => {
  return (
    <View style={styles.item}>
      <View style={styles.item_user}>
        <Image
          source={{ uri: "https://via.placeholder.com/150.png" }}
          style={styles.item_user_avatar}
        ></Image>
        <View style={styles.item_user_info}>
          <Text style={styles.item_user_name}>Paul</Text>
          <Text style={styles.item_user_localtion}>成都</Text>
        </View>
        <TouchableOpacity style={styles.item_opt}>
          <Icon name="more" style={styles.item_opt_icon}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.item_image_wrap}>
        <Image style={styles.item_image} source={{ uri: item.url }} />
      </View>
      <View style={styles.item_content}>
        <View style={styles.item_content_opt}>
          <Icon name="heart" style={styles.item_content_opt_icon}></Icon>
          <Icon name="text" style={styles.item_content_opt_icon}></Icon>
        </View>
        <Text style={styles.item_content_like_amount}>1000 likes</Text>
        <Text style={styles.item_content_txt}>{item.desc}</Text>
        <Text style={styles.item_content_comments_amount}>0 comments</Text>
        <Text style={styles.item_content_post_time}>12 hours ago</Text>
      </View>
    </View>
  );
};
const getPermission = async (state, setState) => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  setState({ ...state, hasCameraPermission: status === "granted" });
};
const ChoosePicture = async (state, setState, navigate) => {
  const { hasCameraPermission } = state;
  if (hasCameraPermission) {
    const result = await ImagePicker.launchImageLibraryAsync(options);
    setState({ ...state, photo: result });
    navigate("Post", { source: result });
  }
};
const TakePicture = async (state, setState, navigate) => {
  const { hasCameraPermission } = state;
  if (hasCameraPermission) {
    const result = await ImagePicker.launchCameraAsync(options);
    setState({ ...state, photo: result });
    navigate("Post", { source: result });
  }
};

const RenderHeaderRight = ({ clicked, setClicked }) => (
  <TouchableOpacity
    onPress={() =>
      ActionSheet.show(
        {
          options: BUTTONS,
          cancelButtonIndex: CANCEL_INDEX,
          destructiveButtonIndex: DESTRUCTIVE_INDEX
        },
        buttonIndex => {
          setClicked(buttonIndex);
        }
      )
    }
  >
    <Icon name="add" style={commonStyles.icon} />
  </TouchableOpacity>
);
const BlogList = ({ navigation }) => {
  const data = [
    {
      url: "https://via.placeholder.com/150.png",
      desc: "xx",
      contentType: "image/png"
    },
    {
      url: "https://via.placeholder.com/150.png",
      desc: "xx",
      contentType: "image/png"
    },
    {
      url: "https://via.placeholder.com/150.png",
      desc: "xx",
      contentType: "image/png"
    }
  ];
  const initialState = {
    photo: "",
    hasCameraPermission: false
  };
  const isMounted = useRef(false);
  const [clicked, setClicked] = useState(null);
  const [state, setState] = useState(initialState);
  const { navigate } = navigation;
  useEffect(() => {
    if (!isMounted.current) {
      getPermission(state, setState);
      //console.log("componentDidMount");
    }
    isMounted.current = true;
    // console.log("componentWillUpdate");
    if (clicked === 0) {
      TakePicture(state, setState, navigate);
    } else if (clicked === 1) {
      ChoosePicture(state, setState, navigate);
    }
    setClicked(null);
    return () => {
      // console.log("componentWillUnmount");
    };
  }, [clicked, state]);

  return (
    <SafeAreaView style={commonStyles.SafeAreaView}>
      <Header
        title="Posts"
        right={<RenderHeaderRight setClicked={setClicked} clicked={clicked} />}
      />
      <View style={commonStyles.content}>
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default BlogList;

const styles = StyleSheet.create({
  item_user: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
    paddingLeft: 15
  },
  item_user_avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  item_user_info: {
    marginHorizontal: 10
  },
  item_user_localtion: {
    color: "#757575",
    fontSize: 14
  },
  item_opt: {
    position: "absolute",
    right: 15,
    transform: [{ rotate: "90deg" }]
  },
  item_opt_icon: {
    color: "#000"
  },
  item_image_wrap: {
    alignSelf: "stretch"
  },
  item_image: {
    height: 200,
    alignSelf: "stretch"
  },
  item_content: {
    padding: 15
  },
  item_content_opt: {
    flexDirection: "row"
  },
  item_content_opt_icon: {
    color: "#ccc",
    marginRight: 10
  },
  item_content_txt: {
    color: "#777",
    fontSize: 16,
    paddingVertical: 5
  },
  item_content_like_amount: {
    color: "#333",
    fontSize: 12
  },
  item_content_comments_amount: {
    color: "#757575",
    fontSize: 12
  },
  item_content_post_time: {
    color: "#757575",
    fontSize: 12
  }
});
