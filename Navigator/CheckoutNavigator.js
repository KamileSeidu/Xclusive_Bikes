import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import Checkout from '../screens/Checkout';
import Confirm from '../screens/Confirm';
import Payment from '../screens/Payment';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Shipping" component={Checkout} />
        <Tab.Screen name="Payment" component={Payment} />
        <Tab.Screen name="Confirm" component={Confirm} />
      </Tab.Navigator>
    );
  }

export default function CheckoutNavigator() {
    return <MyTabs/>
};