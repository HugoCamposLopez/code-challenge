import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
interface GenericContainerProps{
  children?: React.ReactNode
}

export const GenericContainer = ({children}: GenericContainerProps) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

