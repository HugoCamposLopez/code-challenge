import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: 'row',
    height: 55
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10
  },
  descriptionContainer: {
    flex: 2,
    gap: 7,
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 11,
  },
  pointsContainer: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  arrowIcon: {
    width: 15,
    height: 15,
  },
})
