import { StyleSheet } from 'react-native'
import { colors, familyFont } from '../../theme';
export const styles = StyleSheet.create({
  title: {
    fontFamily: familyFont.fontBold,
    color: colors.$colorBlack,
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    fontFamily: familyFont.fontRegular,
    color: colors.$colorBlack,
    fontSize: 24,
  },
});
