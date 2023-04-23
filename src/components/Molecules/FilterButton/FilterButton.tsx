import { View, Text } from 'react-native'
import React from 'react'
import { PropertiesI } from '../CardItem/CardItem'
import StyledButton from '../../Atoms/StyledButton/StyledButton'
import i18n from '../../../i18n'
import { styles } from './styles'

interface FilterButtonProps {
  filterAll: () => void
  filterNegative: () => void
  filterPositive: () => void
  isFilter: boolean
}

const FilterButton = ({ filterAll, filterNegative, filterPositive, isFilter }: FilterButtonProps) => {
  return (
    <View>
      {isFilter ? (
        <StyledButton onPress={filterAll}>
          {i18n.t('everything')}
        </StyledButton>
      ) : (
        <View
          style={styles.containerTwoButtons}>
          <StyledButton
            style={styles.buttonHalf}
            sizeText="size12_800"
            onPress={filterPositive}>
            {i18n.t('win')}
          </StyledButton>
          <StyledButton
            style={styles.buttonHalf}
            sizeText="size12_800"
            onPress={filterNegative}>
            {i18n.t('loss')}
          </StyledButton>
        </View>
      )}
    </View>
  )
}

export default FilterButton