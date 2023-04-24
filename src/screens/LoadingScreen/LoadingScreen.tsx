import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { getColor } from '../../utils/app.helper'
import { styles } from './styles'

export const LoadingScreen = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size={'large'} color={getColor('green')}/>
    </View>
  )
}

