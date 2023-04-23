import { ColorVariation } from '../components/Atoms/StyledText/StyledText';
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

export function formatNumber(number) {
  let decimalSeparator = '.';
  let thousandSeparator = ',';
  let parts = number.toFixed(2).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator)
  return parts.join(decimalSeparator)
}
