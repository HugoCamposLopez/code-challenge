import { View, Text } from 'react-native'
import React from 'react'
import { StyledText } from '../../Atoms/StyledText/StyledText'
import i18n from '../../../i18n'

interface HeaderProps {
  name: string
}
export const Header = ({name}: HeaderProps) => {
  return (
    <View>
    <StyledText size='size20' color='black'>{i18n.t("welcome.back")}</StyledText>
    <StyledText size='size16_400' color='black'>{name}</StyledText>
    </View>
  )
}

