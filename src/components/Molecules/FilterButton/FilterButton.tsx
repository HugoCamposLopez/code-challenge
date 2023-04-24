import { View } from 'react-native';
import React from 'react';
import { StyledButton } from '../../Atoms/StyledButton/StyledButton';
import { styles } from './styles';

interface FilterButtonProps {
  filterAll: () => void
  filterNegative: () => void
  filterPositive: () => void
  isFilter: boolean
}

const FilterButton = ({
  filterAll,
  filterNegative,
  filterPositive,
  isFilter,
}: FilterButtonProps) => {
  return (
    <View>
      {isFilter ? (
        <StyledButton onPress={filterAll}>Todos</StyledButton>
      ) : (
        <View style={styles.containerTwoButtons}>
          <StyledButton
            style={styles.buttonHalf}
            sizeText="size12_800"
            onPress={filterPositive}>
            Ganados
          </StyledButton>
          <StyledButton
            style={styles.buttonHalf}
            sizeText="size12_800"
            onPress={filterNegative}>
            Canjeados
          </StyledButton>
        </View>
      )}
    </View>
  );
};

export default FilterButton
