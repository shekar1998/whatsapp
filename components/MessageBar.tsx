import React, { useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';

interface Props {}
const colorScheme = Colors.dark;
const MessageBar = (props: Props) => {
  const [Message, setMessage] = useState('');
  let IconName: any = Message ? 'send' : 'mic';

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Icon name='mood' size={27} color='#fff8'></Icon>
        <TextInput
          placeholderTextColor={colorScheme.text}
          style={styles.textInput}
          placeholder={'Message'}
          onChangeText={setMessage}
          multiline
        />
        <Icon3 name='attachment' size={24} color='#fff8' style={styles.icon}></Icon3>
        {!Message && <Icon2 name='camera' size={27} color='#fff8' style={styles.icon}></Icon2>}
      </View>
      <View style={styles.iconContainer}>
        <Icon name={IconName} size={27} color='#fff'></Icon>
      </View>
    </View>
  );
};

export default MessageBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colorScheme.Header,
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 40,
    alignItems: 'flex-end',
  },
  iconContainer: {
    backgroundColor: colorScheme.Scroll,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 40,
    alignSelf: 'flex-end',
  },
  attachment: {},
  textInput: {
    flex: 1,
    marginHorizontal: 20,
    color: colorScheme.text,
    fontSize: 15.5,
  },
  icon: {
    marginHorizontal: 5,
  },
});
