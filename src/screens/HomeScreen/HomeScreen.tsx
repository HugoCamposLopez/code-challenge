import React from 'react'
import { useNavigation } from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../StackNavigator/StackNavigator'
import { GenericContainer } from '../../components/GenericContainer/GenericContainer'
import { Header } from '../../components/Header/Header'
export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const navigateToDescription = () => {
    navigation.navigate('DescriptionScreen')
  }
  return (
    <GenericContainer>
      <Header name='Rubén Rodríguez' />
    </GenericContainer>
  )
}
