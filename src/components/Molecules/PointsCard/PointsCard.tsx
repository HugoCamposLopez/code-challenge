import { View } from 'react-native'
import React from 'react'
import { StyledText } from '../../Atoms/StyledText/StyledText'
import { styles } from './styles'
import moment from 'moment'
import { capitalizeFirstLetter, formatNumber, getTotalPoints } from '../../../utils/app.helper'

import { PropertiesI } from '../CardItem/CardItem'

interface PointsCardProps {
  movements: PropertiesI[]
}

export const PointsCard = ({ movements }: PointsCardProps) => {
  
  return (
    <View style={styles.container}>
      <StyledText size="size14" color="grey">
        TUS PUNTOS
      </StyledText>
      <View style={styles.cardBlueContainer}>
        <View style={styles.textCardContainer}>
          <StyledText size="size16_800" color="white">
            {capitalizeFirstLetter(moment().format('MMMM'))}
          </StyledText>
          <StyledText size="size24_32" color="white" textAlign="center">
            {getTotalPoints(movements)} pts
          </StyledText>
        </View>
      </View>
    </View>
  )
}
