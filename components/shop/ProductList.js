import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductList = ({ navigation }) => {
  return (
    <View>
      <Text>ProductList Content</Text>
      <Button
        title="Go to ProductDetail"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </View>
  );
}

export default ProductList;