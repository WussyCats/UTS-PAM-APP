import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const OrderCancellation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Order Cancellation!</Text>
      <Button title='Click Here'onPress={() => alert('Button Clicked!!!')} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bedfed',
  },
})

export default OrderCancellation;