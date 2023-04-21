import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../StackNavigator/StackNavigator';
import i18n from '../../i18n';

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateToDescription = () => {
    navigation.navigate('DescriptionScreen');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{i18n.t('example.hello')}</Text>
      <Button title="Go to Description" onPress={navigateToDescription} />
    </View>
  );
};
