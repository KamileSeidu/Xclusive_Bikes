import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput  } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import COLORS from '../consts/colors'

export default function Home(params) {
  return (
    <SafeAreaView 
    style={{flex: 1, 
            paddingHorizontal:20,
            backgroundColor: COLORS.white,}}>
        <View style={styles.header}>
            <View>
                <Text style={{fontSize:25, fontWeight: 'bold'}}>Welcome to</Text>
                <Text style={{fontSize:32, fontWeight: 'bold', color: COLORS.green}}>Xclusive Bikes</Text>
            </View>
            <AntDesign name="shoppingcart" size={28} color="black" />
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
         <View style={styles.searchContainer}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder='Search' style={styles.search}/>
         </View>
        </View>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 header: {
     marginTop: 30,
     flexDirection: 'row',
     justifyContent: 'space-between',
 },
 searchContainer: {
     height: 50,
     backgroundColor: COLORS.light,
     borderRadius: 10,
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
 },
 search: {
     
 }
 
})
