import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../consts/colors';
import bikes from '../consts/bikes';

function DetailsScreen({navigation, route}) {
    const bike = route.params;
    return (
          <SafeAreaView style={{flex: 1, backgroundColor: 'COLORS.white'}}>
              <TouchableOpacity style={styles.header}>
              <AntDesign name="shoppingcart" size={28} color="black" />
              </TouchableOpacity>
              <View style={styles.imageContainer}>
                  <Image source={bike.img} style={{resizeMode: 'contain', flex: 1,}}/>
              </View>
          </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
       alignItems: 'flex-end'
        
    },

    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default DetailsScreen;