import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

function Message(params) {
    return (
       <SafeAreaView>
            <View style={styles.view}>
               <Text style={{
                   fontWeight: 'bold',
                   color: 'white',
                   fontSize: 25,
                   marginLeft:12}}>
                   Welcome To Xclusive Chat!
               </Text>
            </View>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 13,
        marginRight: 13,
        marginTop: 10,
        backgroundColor: 'orange'
    }
})
export default Message;