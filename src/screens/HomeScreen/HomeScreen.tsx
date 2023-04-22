import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../StackNavigator/StackNavigator'
import { GenericContainer } from '../../components/GenericContainer/GenericContainer'
import { styles } from './styles'
export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const navigateToDescription = () => {
    navigation.navigate('DescriptionScreen')
  }
  return (
    <GenericContainer>
      <Text style={styles.title}>Bienvenido de vuelta</Text>
      <Text style={styles.subtitle}>Ruben Rodriguez</Text>
      <Button title="Go to Description" onPress={navigateToDescription} />
    </GenericContainer>
  )
}
