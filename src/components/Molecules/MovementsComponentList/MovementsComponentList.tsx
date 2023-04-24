import { View, ScrollView } from 'react-native';
import React from 'react';
import { StyledText } from '../../Atoms/StyledText/StyledText';
import { CardItem, PropertiesI } from '../CardItem/CardItem';
import { styles } from './styles';
interface ItemsComponentListProps {
  itemList: PropertiesI[]
}

export const MovementsComponentList = ({
  itemList,
}: ItemsComponentListProps) => {
  return (
    <View style={styles.container}>
      <StyledText size="size14" color="grey">
        TUS MOVIMIENTOS
      </StyledText>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{ paddingBottom: 40, gap: 8 }}
        style={styles.scrollViewContainer}>
        {itemList &&
          itemList?.map((item, index) => {
            return <CardItem item={item} key={index} />;
          })}
      </ScrollView>
    </View>
  );
};
