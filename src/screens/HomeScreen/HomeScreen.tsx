import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../StackNavigator/StackNavigator'
import { GenericContainer } from '../../components/GenericContainer/GenericContainer'
import { styles } from './styles'
import { StyledText } from '../../components/StyledText/StyledText'
export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const navigateToDescription = () => {
    navigation.navigate('DescriptionScreen')
  }
  return (
    <GenericContainer>
      <StyledText size='size20' color='black'>Bienvenido de vuelta</StyledText>
      <StyledText size='size16_400' color='black'>Rubén Rodríguez</StyledText>
    </GenericContainer>
  )
}
