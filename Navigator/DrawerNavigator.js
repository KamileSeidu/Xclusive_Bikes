import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerContent} from '../screens/DrawerContent';

//Screens
import Home from '../screens/Home'
import Login from '../screens/Login'
import Message from '../screens/Message'

const Drawer = createDrawerNavigator();


function MyDrawer() {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sign Out" component={Login} />
        <Drawer.Screen name="Message" component={Message} />
      </Drawer.Navigator>
    );
  }

export default function DrawerNavigator() {
    return <MyDrawer/>
}