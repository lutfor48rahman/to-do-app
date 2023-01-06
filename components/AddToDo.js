import { StyleSheet,View,TextInput,Button} from 'react-native';
import React, { useState } from "react";

export default function AddToDo ({submitHandler}) {
  const [text, setText] = useState('');
  const addValue = (val) =>{
    setText(val);
  }
return (
  <View>
  <TextInput
   placeholder='add todo.. '
   onChangeText={addValue} 
   style = {styles.todo} />
 <Button onPress={()=> submitHandler(text)} title='Add Todo' color='coral'/>
  </View>
)
}

const styles = StyleSheet.create({
todo:{
  marginTop:30,
  marginBottom:20,
  padding:20,
  borderBottomWidth:1,
  borderBottomColor:'#bbb',
},
});