import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
import OrderDetails from '../screens/OrderDetails';
import OrderCancellation from '../screens/OrderCancellation';
import Other from '../screens/Other';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          right: 25,
          left: 25,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 13,
            bottom: 4,
          },
          tabBarIcon: () => <Entypo name="home" size={30} color="#082f82" />,
        }}
      />
      <Tab.Screen
        name="Order Details"
        component={OrderDetails}
        options={{
          tabBarLabel: 'Order Details',
          tabBarLabelStyle: {
            fontSize: 13,
            right: 7,
            bottom: 4,
          },
          tabBarIconStyle: {
            right: 7,
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="book" size={30} color="#082f82" />
          ),
        }}
      />
      <Tab.Screen
        name="Cancellation"
        component={OrderCancellation}
        options={{
          tabBarLabel: 'Cancellation',
          tabBarLabelStyle: {
            fontSize: 13,
            left: 7,
            bottom: 4,
          },
          tabBarIconStyle: {
            left: 7,
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="book-cancel"
              size={30}
              color="#082f82"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          tabBarLabel: 'Other',
          tabBarLabelStyle: {
            fontSize: 13,
            bottom: 4,
          },
          tabBarIcon: () => <Feather name="menu" size={30} color="#082f82" />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '##1c2029',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;