import { ColorVariation } from '../components/Atoms/StyledText/StyledText';
import { PropertiesI } from '../components/Molecules/CardItem/CardItem';
import { colors } from '../theme';

export const getColor = (color: ColorVariation) => {
  switch (color) {
    case 'black':
      return colors.$colorBlack;
    case 'blue':
      return colors.$colorBlue;
    case 'blueLight':
      return colors.$colorBlueLight;
    case 'green':
      return colors.$colorGreen;
    case 'grey':
      return colors.$colorGrey;
    case 'red':
      return colors.$colorRed;
    case 'white':
      return colors.$colorWhite;
  }
};

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatNumber(number: number) {
  let decimalSeparator = '.';
  let thousandSeparator = ',';
  let parts = number.toFixed(2).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator)
  return parts.join(decimalSeparator)
}


export const getTotalPoints = (allMovementes: PropertiesI[]) => {
  let sumTotal = 0
  let sumNegative = 0
  allMovementes.map((item: PropertiesI) => {
    if (item.is_redemption === true) {
      sumNegative = sumNegative + item.points
    }else{
      sumTotal = sumTotal + item.points
    }
  })

  return formatNumber(sumTotal - sumNegative)
}