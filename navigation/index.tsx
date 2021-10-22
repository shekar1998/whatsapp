/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LinkingConfiguration from './LinkingConfiguration';
import MainNavigation from './MainNavigation';
import MessageScreen from '../screens/MessageScreen';
import ChatScreenMenu from '../components/MenuList/ChatScreenMenu';
import contactScreen from '../screens/contactScreen';
import contactInfo from '../components/contactInfo';
import MessageWindow from '../components/MessageWindow';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
let colorScheme = Colors.dark;

function RootNavigator() {
  let colorScheme = Colors.dark;
  const navigation = useNavigation();
  function handlePress() {
    console.log('pressed');
    navigation.navigate('ChatScreenMenu');
  }

  return (
    <Stack.Navigator
      initialRouteName='WhatsApp'
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme.Header,
        },
        headerTintColor: colorScheme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='WhatsApp'
        options={{
          gestureEnabled: true,
          headerRight: () => (
            <View style={{ justifyContent: 'space-between', width: 70, flexDirection: 'row' }}>
              <Icon name='search' size={25} color='#fff9' />
              <Icon2 name='account' onPress={() => handlePress()} size={25} color='#fff9'></Icon2>
            </View>
          ),
        }}
        component={MainNavigation}
      />
      <Stack.Screen
        name='Message'
        component={MessageScreen}
        options={({ route }: any) =>({
          headerTitle: () =>
            (
              <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Image style={styles.image} source={{ uri: route.params.image }} />
                <Text style={styles.name} onPress={() => navigation.navigate('contactInfo')}>
                  {route.params.name}
                </Text>
              </View>
            ),
          headerRight: () => (
            <View style={{ justifyContent: 'space-between', width: 110, flexDirection: 'row' }}>
              <Icon name='videocam' size={23} color='#fff' />
              <Icon name='call' size={20} color='#fff' />
              <Icon2 name='dots-vertical' size={23} color='#fff'></Icon2>
            </View>
          ),
        })}
      />
        <Stack.Screen
        name='MessageWindow'
        component={MessageWindow}
        options={({ route }: any) =>({
          headerTitle: () =>
            (
              <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <Image style={styles.image} source={{ uri: route.params.image }} />
                <Text style={styles.name} onPress={() => navigation.navigate('contactInfo')}>
                  {route.params.name}
                </Text>
              </View>
            ),
          headerRight: () => (
            <View style={{ justifyContent: 'space-between', width: 110, flexDirection: 'row' }}>
              <Icon name='videocam' size={23} color='#fff' />
              <Icon name='call' size={20} color='#fff' />
              <Icon2 name='dots-vertical' size={23} color='#fff'></Icon2>
            </View>
          ),
        })}
      />
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name='ChatScreenMenu' component={ChatScreenMenu} options={{ title: 'Setting' }} />
      <Stack.Screen name='contactInfo' component={contactInfo} options={{ title: 'Info' }} />
      <Stack.Screen name='contactScreen' component={contactScreen} options={{ title: 'Contacts' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    padding: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: Dimensions.get('window').width - 50,
    resizeMode: 'cover',
    padding: 20,
    marginLeft: -20,
  },
  name: {
    color: colorScheme.chatScreenName,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
