import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerContent} from '../screens/DrawerContent';

//Screens
import Home from '../screens/Home'
import About from '../screens/About'
import Message from '../screens/Message'

const Drawer = createDrawerNavigator();


function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact Us" component={Message} />
      </Drawer.Navigator>
    );
  }

export default function DrawerNavigator() {
    return <MyDrawer/>
}