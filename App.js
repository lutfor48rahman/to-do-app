import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Content from './components/Contents';
import AddToDo from './components/AddToDo';

export default function App() {
  const [person, setPerson] = useState([
    { name: 'pran', id: 1 },
    { name: 'lutfor', id: 2 },
    { name: 'litu ', id: 3 },
  ]);

  const removeHandler = (id) => {
    const newPerson = person.filter((pr) => pr.id != id);
    setPerson(newPerson);
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      const oldArry = person;
      const newArry = [{ name: text, id: Math.random() }, ...oldArry];
      setPerson(newArry);
    } else {
      Alert.alert('Opps!', 'This Too much...Minimum 4 charecter', [
        { text: 'Understood' },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.para}> Todo List</Text>
        </View>
        <View>
          <AddToDo submitHandler={submitHandler} />
        </View>
        <View style={styles.lists}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={person}
            renderItem={({ item }) => (
              <Content item={item} removeHandler={removeHandler} />
            )}></FlatList>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 80,
    marginTop: 35,
    backgroundColor: 'coral',
  },
  lists: {
    flex:1,
    width: '100%',
  },
  para: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
