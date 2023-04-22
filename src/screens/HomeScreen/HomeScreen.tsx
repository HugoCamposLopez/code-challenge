import React from 'react'
import { useNavigation } from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../StackNavigator/StackNavigator'
import { GenericContainer } from '../../components/Atoms/GenericContainer/GenericContainer'
import { Header } from '../../components/Molecules/Header/Header'
import { PointsCard } from '../../components/Molecules/PointsCard/PointsCard'
import { MovementsComponentList } from '../../components/Molecules/MovementsComponentList/MovementsComponentList'
import data from '../../utils/data.json'

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const navigateToDescription = () => {
    navigation.navigate('DescriptionScreen')
  }
  return (
    <GenericContainer>
      <Header name='Rubén Rodríguez' />
      <PointsCard />
      <MovementsComponentList itemList={data} />
    </GenericContainer>
  )
}
