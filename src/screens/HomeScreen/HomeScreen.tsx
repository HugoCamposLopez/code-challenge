import React from 'react'
import { useNavigation } from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../StackNavigator/StackNavigator'
import { GenericContainer } from '../../components/Atoms/GenericContainer/GenericContainer'
import { Header } from '../../components/Molecules/Header/Header'
import { PointsCard } from '../../components/Molecules/PointsCard/PointsCard'
import { MovementsComponentList } from '../../components/Molecules/MovementsComponentList/MovementsComponentList'
import data from '../../utils/data.json'
import StyledButton from '../../components/Atoms/StyledButton/StyledButton'
import { View } from 'react-native'

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
      <StyledButton>Todos</StyledButton>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 20, width: "100%", gap: 13 }}>
        <StyledButton style={{ width: "50%" }} sizeText='size12_800'>Ganados</StyledButton>
        <StyledButton style={{ width: "50%" }} sizeText='size12_800'>Canjeados</StyledButton>
      </View>
    </GenericContainer>
  )
}
