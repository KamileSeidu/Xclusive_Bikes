import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from '../consts/colors'
import { MaterialIcons } from '@expo/vector-icons';

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <ImageBackground
    blurRadius={10} 
    style={styles.background}
    source={require('../assets/background.jpg')}>
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginBottom: 30,
          width: 120,
          height: 120,
          position:'relative',
        }}
        source={require('../assets/aaa.jpg')}
      />
      <Text style={{ fontSize: 40, color: "grey" }}>Xclusive Bikes</Text>
      
      <View style={styles.inputContainer}>
         <AntDesign name="user" size={24} color="black" style={{paddingLeft: 10}} />
         <TextInput placeholder="User Name" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <MaterialIcons name="security" size={24} color="black" style={{paddingLeft: 10}}/>
         <TextInput placeholder="Password" secureTextEntry={true} style={{paddingLeft: 10}}/>
         </View>
     
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 20,
          flexDirection: "row",
          backgroundColor: "blue",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Log in</Text>
      </TouchableOpacity>

      <View style={{ marginTop:10, flexDirection: 'row', marginBottom: 10}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 2,
          paddingHorizontal: 30,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
          marginRight: 10,
          
        }}
      >
        <AntDesign name="google" size={24} color="black" />
        <Text style={{ paddingLeft: 6, color: "black", fontSize:11 }}>Log in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 30,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 6, color: "white", fontSize:11}}>Login with Apple</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.viewContainer}>
      <Text style={{marginRight: 10}}>Not a Member?</Text>
      <TouchableOpacity onPress={() => {
          navigation.navigate("SignUp");
        }}>
      <Text style={styles.textContainer}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    color: "orange",
    fontWeight: "400",
  },
  viewContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 13,
    marginRight: 13,
    marginTop: 10,
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  }
})
