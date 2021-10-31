import React from "react";
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    Dimensions, 
    FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, Icon } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../consts/colors';
import bikes from '../consts/bikes';
const width = Dimensions.get('screen').width/2-30;

export default function Home(params) {
    const navigation = params.navigation;
    const categories = ['BIKES', 'MOTORBIKE', 'BICYCLE'];

    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index)=>(
                <TouchableOpacity  key={index} onPress={()=>setCategoryIndex(index)}>
                  <Text 
                  style={[styles.categoryText, catergoryIndex == index && styles.categoryTextSelected]}>
                      {item}
                  </Text>
                  </TouchableOpacity>
                  ))}
            </View>
        );
    };
    const Card = ({bike}) => {
       return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => {
                navigation.navigate("DetailsScreen", bike);}}
                >
            <View style = {styles.card}>
        <View style={{alignItems: 'flex-end'}}>
            <View style=
                {{width: 30, 
                    height: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: bike.like
                 ? 'rgba(2, 42, 42, 0.2)' 
                 : 'rgba(0,0,0,0.2)',}}>
                <MaterialIcons 
                name="favorite" 
                size={18} 
                color={bike.like ? COLORS.red : COLORS.dark} />
             </View>
            </View>   
            <View style={{height: 100, alighItems: 'center'}}>
                <Image
                    source={bike.img}
                    style={{resizeMode: 'contain', width: 100, 
                    height: 100, marginLeft: 15, marginTop: 10,}} 
                />
        </View>
                <Text 
                    style={{fontSize: 16, 
                    fontWeight: 'bold', 
                    marginTop: 10}}>{bike.name}
                </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
            }}>
                <Text style={{fontSize: 19, fontWeight: 'bold'}}>${bike.price}</Text>
            <TouchableOpacity>
            <View style={{
                height: 25,
                width: 25,
                backgroundColor: 'orange',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>+</Text>
                </View>
            </TouchableOpacity>
            </View>
       </View>
       </TouchableOpacity>
       );
    };
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
            <TouchableOpacity onPress={() => {
                navigation.navigate("Cart");
              }} 
              style={styles.header}>
                <AntDesign name="shoppingcart" size={28} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
         <View style={styles.searchContainer}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder='Search' style={styles.search}/>
         </View>
        <View style={styles.sortbutton}>
        <MaterialIcons name="sort" size={24} color="black" />
        </View>
            </View> 
        <CategoryList/>
        <FlatList 
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }} 
        numColumns={2} 
        data={bikes} 
        renderItem={({item})=> {
        return <Card bike={item} />;
        }}
        />
    </SafeAreaView>
 );
};

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
     fontSize: 18,
     fontWeight: 'bold',
     color: COLORS.dark,
     flex: 1
 },

 sortbutton: {
     marginLeft: 10,
     height: 50,
     width: 50,
     backgroundColor: "orange",
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 15,
 },
 categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
      fontSize: 20,
      color: 'grey',
      fontWeight: 'bold'
  },
  categoryTextSelected:{
      color: 'orange',
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: 'orange',
  },
  card: {
      height: 225,
      backgroundColor: COLORS.light,
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
  },
})
