import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

export default function App() {

  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <StatusBar style="auto" />
      <View style={styles.textinput}>
        <TextInput
          placeholder='Username'
          value={text}
          onChangeText={onChangeText}
        />
        <TextInput
          placeholder='Password'
          value={text}
          onChangeText={onChangeText}
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
    style: 'bold'
  },
  text: {
    color: 'green',
  }
});
