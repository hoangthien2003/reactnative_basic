import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {

  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <StatusBar style="auto" />
      <View style={styles.text_input}>
        <TextInput
          placeholder='Username'
          value={text1}
          onChangeText={onChangeText1}
          style={styles.text_input1}
        />
        <TextInput
          placeholder='Password'
          value={text2}
          onChangeText={onChangeText2}
          style={styles.text_input2}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <Button
             title="submit"
             color="black"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    style: 'bold',
    fontFamily: 'Helvetica'
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '25px',

  },
  text_input: {
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
    padding: 3,

  },
  text_input1: {
    fontSize: '15px',
    padding: 5,

  },
  text_input2: {
    fontSize: '15px',
    padding: 5,
    
  },
});
