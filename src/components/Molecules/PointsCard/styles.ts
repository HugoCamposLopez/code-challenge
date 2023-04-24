import { colors } from '../../../theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  cardBlueContainer: {
    width: 286,
    height: 143,
    backgroundColor: colors.$colorBlue,
    borderRadius: 20,
    alignSelf: 'center',
  },
  textCardContainer: {
    flex: 1,
    paddingHorizontal: 19,
    paddingTop: 21,
    gap: 12,
  },
})
