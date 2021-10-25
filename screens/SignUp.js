import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import COLORS from '../consts/colors'
import { MaterialIcons } from '@expo/vector-icons';

function SignUp(params) {
    const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
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
        }}
        source={require('../img/aaa.jpg')}
      />
      <Text style={{ fontSize: 40, color: "grey" }}>Xclusive Bikes</Text>
      
      <View style={styles.inputContainer}>
         <AntDesign name="user" size={24} color="black" style={{paddingLeft: 10}} />
         <TextInput placeholder="User Name" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <AntDesign name="mail" size={24} color="black" style={{paddingLeft: 10}} />
         <TextInput placeholder="Email" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <AntDesign name="phone" size={24} color="black" style={{paddingLeft: 10}}/>
         <TextInput placeholder="Phone Number" 
         style={{paddingLeft: 10}}
         keyboardType='numeric'
         maxLength={10}
         />
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
          paddingHorizontal: 120,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "blue",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    color: "orange",
    fontWeight: "400",
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
  }
})


export default SignUp;