// Page1.js
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Mypage = () => {
  return (
    <View>
      <Text>MypageMain Content</Text>
      {/* 다른 내용 추가 */}
    </View>
  );
}

export default Mypage;