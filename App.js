import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearList = () => {
    setData([]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.buttonRow}>
        <Button onPress={buttonPressed} title="Add" />
        <Button onPress={clearList} title="Clear" />
      </View>
      <Text style={styles.text}>Shopping List</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Text>{item.key}</Text>
          </View>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  buttonRow: {
    flexDirection: 'row',
  },
  text: {
    color: "blue",
    fontWeight: "bold",
    
  },
  item: {
    alignItems: 'center',
  }
});