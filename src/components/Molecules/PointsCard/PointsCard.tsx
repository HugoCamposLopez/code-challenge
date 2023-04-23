import { View } from 'react-native'
import React from 'react'
import { StyledText } from '../../Atoms/StyledText/StyledText'
import i18n from '../../../i18n'
import { styles } from './styles'
import moment from 'moment'
import { capitalizeFirstLetter } from '../../../utils/app.helper'

interface PointsCard {
  information: any
}

export const PointsCard = () => {
  return (
    <View style={styles.container}>
      <StyledText size="size14" color="grey">
        {i18n.t('your.points')}
      </StyledText>
      <View style={styles.cardBlueContainer}>
        <View style={styles.textCardContainer}>
          <StyledText size="size16_800" color="white">
            {capitalizeFirstLetter(moment().format('MMMM'))}
          </StyledText>
          <StyledText size="size24_32" color="white" textAlign="center">
            10,000.00 pts
          </StyledText>
        </View>
      </View>
    </View>
  )
}
