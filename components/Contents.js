import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

export default function Content ({item,removeHandler}){
 
     return(
      <View style ={styles.content}>
        <TouchableOpacity >
        <View style ={styles.items}>
       <Text style ={styles.textItems}>{item.name}</Text>
        <MaterialIcons onPress={() => removeHandler(item.id)} name='delete' size={25} color='black' />
       </View>
      </TouchableOpacity>
      </View>
     )
}

const styles = StyleSheet.create({
  items:{
    flex:1,
    marginTop:24,
    padding:30,
    borderWidth:2,
    borderStyle:'dashed',
    backgroundColor:'pink',
    fontSize:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textItems:{
    // marginLeft:10,
    fontSize:20,
  }
});