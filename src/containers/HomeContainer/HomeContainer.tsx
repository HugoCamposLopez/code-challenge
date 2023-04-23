import React, { useCallback, useEffect, useState } from 'react';
import { GenericContainer } from '../../components/Atoms/GenericContainer/GenericContainer';
import { Header } from '../../components/Molecules/Header/Header';
import { PointsCard } from '../../components/Molecules/PointsCard/PointsCard';
import { MovementsComponentList } from '../../components/Molecules/MovementsComponentList/MovementsComponentList';
import StyledButton from '../../components/Atoms/StyledButton/StyledButton';
import { ActivityIndicator, View } from 'react-native';
import { usefetchMovements } from '../../store/action-creators/usefetchMovements';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import i18n from '../../i18n';
import { PropertiesI } from '../../components/Molecules/CardItem/CardItem';

export const HomeContainer = (): JSX.Element => {
  const { movements } = useSelector((state: RootState) => state);
  const { fetchMovements_execute, loading, success } = usefetchMovements();
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    fetchMovements_execute();
  }, []);

  useEffect(() => {
    !loading && setMovementsList(movements);
  }, [loading, movements]);

  const [movementsList, setMovementsList] = useState<PropertiesI[]>(movements);
  const filterPostive = () => {
    const movementsPositive = movements?.filter((item: PropertiesI) => {
      if (item.is_redemption === false) {
        return item;
      }
    });
    setMovementsList(movementsPositive);
    setIsFilter(true);
  };

  const filterNegatives = () => {
    const movementsNegatives = movements?.filter((item: PropertiesI) => {
      if (item.is_redemption === true) {
        return item;
      }
    });
    setMovementsList(movementsNegatives);
    setIsFilter(true);
  };

  const withoutFilter = () => {
    setMovementsList(movements);
    setIsFilter(false);
  };
  return (
    <GenericContainer>
      <Header name="Rubén Rodríguez" />
      <PointsCard />
      {loading && !success ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <MovementsComponentList itemList={movementsList!} />
      )}

      {isFilter ? (
        <StyledButton onPress={withoutFilter}>
          {i18n.t('everything')}
        </StyledButton>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 20,
            width: '100%',
            gap: 13,
          }}>
          <StyledButton
            style={{ width: '50%' }}
            sizeText="size12_800"
            onPress={filterPostive}>
            {i18n.t('win')}
          </StyledButton>
          <StyledButton
            style={{ width: '50%' }}
            sizeText="size12_800"
            onPress={filterNegatives}>
            {i18n.t('loss')}
          </StyledButton>
        </View>
      )}
    </GenericContainer>
  );
};
