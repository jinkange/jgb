// Page1.js
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Setting = () => {
  return (
    <View>
      <Text>Setting Content</Text>
      {/* 다른 내용 추가 */}
    </View>
  );
}

export default Setting;