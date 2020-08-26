import * as React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212'
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white'
  },
});
