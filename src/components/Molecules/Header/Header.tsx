import { View } from 'react-native';
import React from 'react';
import { StyledText } from '../../Atoms/StyledText/StyledText';

interface HeaderProps {
  name: string
}
export const Header = ({ name }: HeaderProps) => {
  return (
    <View>
      <StyledText size="size20" color="black">
        Bienvenido de vuelta!
      </StyledText>
      <StyledText size="size16_400" color="black">
        {name}
      </StyledText>
    </View>
  );
};
