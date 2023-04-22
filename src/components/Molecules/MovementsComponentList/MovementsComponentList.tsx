import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyledText } from '../../Atoms/StyledText/StyledText'
import i18n from '../../../i18n'
import { CardItem, PropertiesI } from '../CardItem/CardItem'
import { styles } from './styles'
interface ItemsComponentListProps {
  itemList: PropertiesI[]
}

export const MovementsComponentList = ({ itemList }: ItemsComponentListProps) => {
  return (
    <View style={styles.container}>
      <StyledText size='size14' color='grey'>{i18n.t("your.movements")}</StyledText>
      <ScrollView
      nestedScrollEnabled
        contentContainerStyle={{ paddingBottom: 40, gap: 8 }}
        style={styles.scrollViewContainer}>
        {itemList.map((item, index) => {
          return (
            <CardItem item={item} key={index} />
          )
        })}
      </ScrollView>
    </View>
  )
}

