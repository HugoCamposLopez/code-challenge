import { View, Image, ScrollView } from 'react-native'
import React from 'react'
import { StyledText } from '../../components/Atoms/StyledText/StyledText'
import { StyledButton } from '../../components/Atoms/StyledButton/StyledButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../StackNavigator/StackNavigator'
import moment from 'moment'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
moment.updateLocale('es', null)

export const DescriptionContainer = () => {
  const { params } =
    useRoute<RouteProp<RootStackParamList, 'DescriptionScreen'>>()
  const { item } = params
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.generalContainer}>
          <View style={styles.headerContainer}>
            <StyledText size="size24_24" color="black">
              {item.product}
            </StyledText>
          </View>

          <View>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>

          <View style={styles.detailContainer}>
            <StyledText color="grey" size="size14">
              Detalles del producto:
            </StyledText>
            <StyledText color="black" size="size16_800">
              {`Comprado el ${moment(item.createdAt).format(
                'D [de] MMMM, YYYY',
              )}`}
            </StyledText>
          </View>

          <View style={styles.pointsContainer}>
            <StyledText color="grey" size="size14">
              Con esta compra acumulaste:
            </StyledText>
            <StyledText color="black" size="size24_24">
              {item.points} pts
            </StyledText>
          </View>

          <View style={styles.buttonContainer}>
            <StyledButton onPress={() => navigation.goBack()}>
              Aceptar
            </StyledButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
