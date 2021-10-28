import React from 'react';
import {View, Text, SafeAreaView} from 'react-native'

function DetailsScreen({navigation, route}) {
    const bike = route.params;
    return (
          <SafeAreaView style={{flex: 1, backgroundColor: 'COLORS.white'}}></SafeAreaView>
       
    );
}

export default DetailsScreen;