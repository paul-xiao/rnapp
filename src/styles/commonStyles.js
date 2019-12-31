import { StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS, PADDING, FONTSIZE } from "./variables";

export default StyleSheet.create({
  SafeAreaView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  },
  icon: {
    color: Platform.OS === "android" ? COLORS.white : COLORS.primary
  },
  arrow: {
    fontSize: 18,
    color: "#777",
    marginHorizontal: 10
  },
  content: {
    flex: 1
  },
  container: {
    flex: 1
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  desc: {
    fontSize: FONTSIZE.medium,
    color: COLORS.txtColor,
    padding: PADDING.base,
    paddingTop: PADDING.top
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.defult,
    padding: 10
  },
  buttonPrimary: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 10
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
    backgroundColor: "black"
  },
  modalContent: {
    width: 270,
    padding: 15,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
    textAlign: "center"
  },
  modalContentTxt: {
    color: COLORS.white
  },
  modalOptions: {
    width: 270,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    alignItems: "center",
    backgroundColor: COLORS.defult,
    padding: 10
  },

  // form

  form: {
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
  },
  form_title: {
    textAlign: 'center',
    paddingVertical: 15
  },
  form_item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form_item_btn: {
    backgroundColor: 'lightblue',
    color: '#FFF',
    marginTop: 15,
    borderRadius: 50,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form_item_btn_text: {
    color: '#FFF',
  },
  form_item_input: {
    textAlign: 'left',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
