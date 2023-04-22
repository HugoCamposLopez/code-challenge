import { View, Text } from 'react-native'
import React from 'react'
import { getColor } from '../../utils/app.helper'
import { styles } from './styles'

type VariantSize = "size12" | "size14" | "size16_400"| "size16_800" | "size20" | "size24_24"| "size24_32" | "size32"
export type ColorVariation = "blue" | "grey" | "red" | "green" | "black" | "blueLight" | "white"

interface StyledTextProps{
  children?: React.ReactNode
  size: VariantSize
  color: ColorVariation
}
export const StyledText = ({children, size, color}:StyledTextProps) => {
  const variantSize = () => {
    switch(size){
      case "size12":
        return styles.size12
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
      <Text style={[variantSize(), {color: getColor(color)}]}>{children}</Text>
    </View>
  )
}

