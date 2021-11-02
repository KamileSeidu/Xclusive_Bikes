import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import Home from '../screens/Home'
import Login from '../screens/Login'

const Drawer = createDrawerNavigator();


function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sign Out" component={Login} />
      </Drawer.Navigator>
    );
  }

export default function DrawerNavigator() {
    return <MyDrawer/>
}