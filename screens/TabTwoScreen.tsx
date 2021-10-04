import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

const colorScheme = Colors.dark;


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iure.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorScheme.Chatbackground,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:colorScheme.text,
    padding:10,
    textAlign:'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    color:colorScheme.text
  },
});