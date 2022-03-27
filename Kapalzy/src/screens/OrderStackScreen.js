import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Order from './Order';
import OrderDetails from './OrderDetails';

const HomeStack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Order" component={Order} />
      <HomeStack.Screen name="OrderDetails" component={OrderDetails} />
    </HomeStack.Navigator>
  );
};

export default StackHome;
