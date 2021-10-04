import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './hooks/redux/redux';
import { enableScreens } from 'react-native-screens';
import MainScreen from './screens/MainScreen';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
     <MainScreen />
    </Provider>
  );
}

