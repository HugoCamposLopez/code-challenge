import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { DescriptionScreen } from '../screens/DescriptionScreen/DescriptionScreen';
import { PropertiesI } from "../components/Molecules/CardItem/CardItem";
import { LoadingScreen } from '../screens/LoadingScreen/LoadingScreen';
import { usefetchMovements } from '../store/action-creators/usefetchMovements';

export type RootStackParamList = {
  Home: undefined;
  DescriptionScreen: { item: PropertiesI };
  LoadingScreen: undefined;
};
export const StackNavigator = () => {
  const { success, fetchMovements_execute } = usefetchMovements()


  useEffect(() => {
    fetchMovements_execute();
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        {success ?
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
          </Stack.Group>
          : <Stack.Screen name="LoadingScreen" component={LoadingScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
