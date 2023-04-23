import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {DescriptionScreen} from '../screens/DescriptionScreen/DescriptionScreen';
import { PropertiesI } from "../components/Molecules/CardItem/CardItem";

export type RootStackParamList = {
  Home: undefined;
  DescriptionScreen: {item: PropertiesI};
};
export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
