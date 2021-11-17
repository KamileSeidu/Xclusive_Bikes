import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';



function Payment(params) {
    const navigation = params.navigation;
    return (
        <View>
          <View style={{
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 20,
          // alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "lightgrey",}}>

            <Text>Address and Billing </Text>
            <Text style={{paddingLeft: 145}}>*Required</Text>
          </View>
      <View style={styles.inputContainer}> 
         <TextInput placeholder="First Name                                                    
         *" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <TextInput placeholder="Last name                                                     
         *" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <TextInput placeholder="Additional Info                                             
         " style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <TextInput placeholder="Region                                                          
         *" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <TextInput placeholder="City                                                             
         *" style={{paddingLeft: 10}}/>
         </View>
      <View style={styles.inputContainer}>
         <TextInput placeholder="Phone Number                                                
         *" 
         style={{paddingLeft: 10}}
         keyboardType='numeric'
         maxLength={13}
         />
         </View>
      
     
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Payment");
        }}
        style={{
          padding: 15,
          justifyContent: 'center',
          width: 250,
          marginTop: 40,
          marginLeft: 55,
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "orange",

        }}
      >
        <Text style={{ paddingLeft: 10, color: "white",}}>Proceed to Payment</Text>
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
          alignSelf: 'stretch',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 13,
          marginRight: 13,
          marginTop: 10,
          paddingLeft: 1,
          borderBottomWidth: 1,
          borderEndColor: 'lightgrey',
        },
})

export default Payment;