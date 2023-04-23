import { View } from 'react-native';
import React from 'react';
import { StyledText } from '../../Atoms/StyledText/StyledText';
import i18n from '../../../i18n';
import { styles } from './styles';
import moment from 'moment';
import { capitalizeFirstLetter, formatNumber } from '../../../utils/app.helper';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { PropertiesI } from '../CardItem/CardItem';
interface PointsCard {
  information: any
}

export const PointsCard = () => {
  const { movements } = useSelector((state: RootState) => state);
  const getTotalPoints = () => {
    let sumTotal = 0;
    let sumNegative = 0;
    movements.map((item: PropertiesI) => {
      if (item.is_redemption === true) {
        sumNegative = sumNegative + item.points;
      }
      sumTotal = sumTotal + item.points;
    });

    return formatNumber(sumTotal - sumNegative);
  };
  return (
    <View style={styles.container}>
      <StyledText size="size14" color="grey">
        {i18n.t('your.points')}
      </StyledText>
      <View style={styles.cardBlueContainer}>
        <View style={styles.textCardContainer}>
          <StyledText size="size16_800" color="white">
            {capitalizeFirstLetter(moment().format('MMMM'))}
          </StyledText>
          <StyledText size="size24_32" color="white" textAlign="center">
            {getTotalPoints()} pts
          </StyledText>
        </View>
      </View>
    </View>
  );
};
