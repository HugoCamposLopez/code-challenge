import { StyleSheet } from 'react-native'
import { colors } from '../../theme';
export const styles = StyleSheet.create({
  generalContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  headerContainer: {
    height: 114,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 24,
    backgroundColor: colors.$colorBlueLight,
  },
  image: {
    width: 353,
    height: 350,
    alignSelf: 'center',
    borderRadius: 10,
  },
  detailContainer: {
    paddingTop: 12,
    paddingHorizontal: 20,
    gap: 19,
  },
  pointsContainer: {
    gap: 32,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingTop: 27,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
})
