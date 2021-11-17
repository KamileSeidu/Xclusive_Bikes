import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import COLORS from '../consts/colors'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

function Confirm(params) {
    return (
        <View>
        <Text style={{ fontSize: 20, color: "grey", paddingLeft: 20}}>Accepted Cards</Text>
        <View style={{flexDirection: "row", padding: 14}}>
        <FontAwesome name="cc-visa" size={24} color="black" />
        <FontAwesome name="cc-mastercard" size={24} color="black" style={{marginLeft: 10}} />
        <FontAwesome name="paypal" size={24} color="black" style={{marginLeft: 10}}/>
        <FontAwesome name="cc-discover" size={24} color="black" style={{marginLeft: 10}} />
        </View>
  
      <Text style={{marginLeft:15}}>Name on card</Text>
  <View style={styles.inputContainer}>
     <TextInput placeholder="Seidu Kamile" style={{paddingLeft: 10}}/>
     </View>


     <Text style={{marginLeft:15, paddingTop: 10}}>Credit card Number</Text>
  <View style={styles.inputContainer}>
     <TextInput placeholder="4332 2312 7873 8373" 
     style={{paddingLeft: 10}}
     keyboardType='numeric'
     maxLength={16}
     />
     </View>


     <Text style={{marginLeft:15, paddingTop:10}}>Exp Month</Text>
  <View style={styles.inputContainer}>
     <TextInput placeholder="September" style={{paddingLeft: 10}}/>
     </View>

  <View style={{flexDirection: 'row'}}>
    <View>
     <Text style={{marginLeft:15, paddingTop:10}}>Exp Year</Text>
  <View style={{height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      width: 150,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 13,
      marginRight: 13,
      marginTop: 10,}}>
     <TextInput placeholder="2023" style={{paddingLeft: 10}}/>
     </View>
     </View>
     <View>
     <Text style={{marginLeft:15, paddingTop:10}}>CVV</Text>
  <View style={{height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      width: 150,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 13,
      marginRight: 13,
      marginTop: 10,}}>
     <TextInput placeholder="223" style={{paddingLeft: 10}}/>
     </View>
     </View>
  </View>
 
  <TouchableOpacity
    style={{
      padding: 15,
      width: 250,
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginLeft: 55,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "orange",
    }}
  >
    <Text style={{ paddingLeft: 10, color: "white", fontSize: 16 }}>Pay Now</Text>
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
    },
})
export default Confirm;