import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { StyledText, VariantSize } from '../StyledText/StyledText'
import { styles } from './styles'
interface StyledButtonProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  sizeText?: VariantSize 
  onPress?: () => void
}

export const StyledButton = ({children, style, onPress, sizeText= "size16_800"}:StyledButtonProps) => {
  return (
    <TouchableOpacity role='button' style={[style, styles.buttonContainer]} onPress={onPress}>
      <StyledText size={sizeText} color='white'>{children}</StyledText>
    </TouchableOpacity>
  )
}

