import { StyleSheet } from 'react-native';
import {COLORS, PADDING, FONTSIZE} from './variables'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  desc: {
    fontSize: FONTSIZE.medium,
    color: COLORS.txtColor,
    padding: PADDING.base,
    paddingTop: PADDING.top
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.defult,
    padding: 10
  },
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 10
  },
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.2,
    backgroundColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    position:'relative',
    width: 270,
    height: 300,
    flexDirection: "column",
    borderRadius: 13,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
  },
  modalOptions: {
    alignItems: 'center',
    backgroundColor: COLORS.defult,
    padding: 10
  }
});