import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import Colors from '../constants/Colors';
import CameraScreen from '../screens/CameraScreen';
import CallsScreen from '../screens/CallsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {}

const MainNavigation = (props: Props) => {
  const Tab = createMaterialTopTabNavigator();
  let colorScheme = Colors.dark;

  return (
    <Tab.Navigator
    transitionStyle={'curl'}
      screenOptions={{
        
        tabBarActiveTintColor: colorScheme.Scroll,
        tabBarInactiveTintColor: colorScheme.text,
        tabBarLabelStyle: { fontSize: 14, fontWeight: '700' },
        tabBarStyle: { backgroundColor: colorScheme.Header, shadowOpacity: 0, elevation: 0 },
        tabBarIndicatorStyle: {
          height: 4,
          backgroundColor: colorScheme.Scroll,
        },
        
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <View style={{ justifyContent: 'space-between', width: 70, flexDirection: 'row' }}>
              <Icon name='camera' size={25} color='#fff9' />
            </View>
          ),
          tabBarLabel: () => null,
        }}
        name='Camera'
        component={CameraScreen}
      />
      <Tab.Screen name='Chats' component={ChatScreen} />
      <Tab.Screen name='Status' component={TabTwoScreen} />
      <Tab.Screen name='Calls' component={CallsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
