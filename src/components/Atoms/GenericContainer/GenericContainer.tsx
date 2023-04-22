import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
interface GenericContainerProps{
  children?: React.ReactNode
}

export const GenericContainer = ({children}: GenericContainerProps) => {
  return (
    <ScrollView nestedScrollEnabled contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  )
}

