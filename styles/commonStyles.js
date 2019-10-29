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
});