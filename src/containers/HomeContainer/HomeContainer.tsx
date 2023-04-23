import React, { useState } from 'react';
import { GenericContainer } from '../../components/Atoms/GenericContainer/GenericContainer';
import { Header } from '../../components/Molecules/Header/Header';
import { PointsCard } from '../../components/Molecules/PointsCard/PointsCard';
import { MovementsComponentList } from '../../components/Molecules/MovementsComponentList/MovementsComponentList';
import { usefetchMovements } from '../../store/action-creators/usefetchMovements';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PropertiesI } from '../../components/Molecules/CardItem/CardItem';
import FilterButton from '../../components/Molecules/FilterButton/FilterButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeContainer = (): JSX.Element => {
  const { movements } = useSelector((state: RootState) => state);
  const { fetchMovements_execute, loading, success } = usefetchMovements();
  const [isFilter, setIsFilter] = useState(false);

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
    <SafeAreaView>
      <GenericContainer>
        <Header name="Rubén Rodríguez" />
        <PointsCard />
        <MovementsComponentList itemList={movementsList!} />
        <FilterButton
          filterAll={withoutFilter}
          filterNegative={filterNegatives}
          filterPositive={filterPostive}
          isFilter={isFilter} />
      </GenericContainer>
    </SafeAreaView>
  );
};
