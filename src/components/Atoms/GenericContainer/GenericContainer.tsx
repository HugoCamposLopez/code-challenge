import { ScrollView, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles'
interface GenericContainerProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const GenericContainer = ({
  children,
  style,
}: GenericContainerProps) => {
  return (
    <ScrollView
      nestedScrollEnabled
      contentContainerStyle={[style, styles.container]}>
      {children}
    </ScrollView>
  )
}
