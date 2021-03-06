import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import DetailsScreen from "./screens/DetailsScreen";
import Cart from "./screens/Cart";
import CheckoutNavigator from "./Navigator/CheckoutNavigator";
import DrawerNavigator from "./Navigator/DrawerNavigator"



export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="SignUp" component={SignUp} />
          <MainNavigator.Screen name="DetailsScreen" component={DetailsScreen} />
          <MainNavigator.Screen name="Cart" component={Cart} />
          <MainNavigator.Screen name="Checkout" component={CheckoutNavigator} />
          <MainNavigator.Screen name="Menu" component={DrawerNavigator}/>
         
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
