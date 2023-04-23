import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyledText } from '../../Atoms/StyledText/StyledText'
import { styles } from './styles'
import moment from 'moment'
import 'moment/locale/es'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../StackNavigator/StackNavigator';

moment.updateLocale('es', null)
export interface PropertiesI {
  createdAt: string
  product: string
  points: number
  image: string
  is_redemption: boolean
  id: string
}

interface CardItemProps {
  item: PropertiesI
}
export const CardItem = ({ item }: CardItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity
      style={styles.touchableContainer}
      onPress={() => navigation.navigate('DescriptionScreen',{item})}>
      <View>
        <Image
          alt="item image"
          style={styles.image}
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <StyledText size="size14" color="black">
          {item.product.length > 15
            ? item.product.slice(0, 16) + '...'
            : item.product}
        </StyledText>
        <StyledText size="size12_400" color="black">
          {moment(item.createdAt).format('D [de] MMMM, YYYY')}
        </StyledText>
      </View>
      <View style={styles.pointsContainer}>
        <View style={styles.pointsAndSignContainer}>
          <StyledText
            size="size16_800"
            color={item.is_redemption ? 'red' : 'green'}>
            {item.is_redemption ? '-  ' : '+ '}
          </StyledText>
          <StyledText size="size16_800" color="black">
            {item.points}
          </StyledText>
        </View>
        <Image
          alt="arrow right"
          source={require('../../../../assets/Images/arrowright.png')}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  )
}
