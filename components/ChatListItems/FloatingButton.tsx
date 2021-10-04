import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

interface Props {}

const colorSchema = Colors.dark;

const FloatingButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon name='chat' onPress={() => navigation.navigate('contactScreen')} size={25} color='#fff' />
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    width: 57,
    height: 57,
    borderRadius: 50,
    backgroundColor: colorSchema.Scroll,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
