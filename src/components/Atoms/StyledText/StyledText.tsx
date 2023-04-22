import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { getColor } from '../../../utils/app.helper'
import { styles } from './styles'

export type VariantSize = "size12_400"| "size12_800" | "size14" | "size16_400"| "size16_800" | "size20" | "size24_24"| "size24_32" | "size32"
export type ColorVariation = "blue" | "grey" | "red" | "green" | "black" | "blueLight" | "white"

interface StyledTextProps{
  children?: React.ReactNode
  size: VariantSize
  color: ColorVariation
  textAlign?: "left" | "center" | "right"
  style?: StyleProp<ViewStyle>
}
export const StyledText = ({children, size, color, textAlign="left", style: styleProp}:StyledTextProps) => {
  const variantSize = () => {
    switch(size){
      case "size12_400":
        return styles.size12_400
      case "size12_800":
        return styles.size12_800
      case "size14":
        return styles.size14
      case "size16_800":
        return styles.size16_800
      case "size16_400":
        return styles.size16_400
      case "size20": 
        return styles.size20
      case "size24_24":
        return styles.size24_24
      case "size24_32":
        return styles.size24_32
      case "size32":
        return styles.size32
    }
  }
  return (
    <View>
      <Text style={[variantSize(), styleProp, {color: getColor(color), textAlign: textAlign,}]}>{children}</Text>
    </View>
  )
}

