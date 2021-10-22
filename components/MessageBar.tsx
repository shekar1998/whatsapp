import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';
import { useRoute } from '@react-navigation/native';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import { createMessage, updateChatRoom } from '../src/graphql/mutations';

interface Props {}
const colorScheme = Colors.dark;
const MessageBar = (props: Props) => {
  const [Message, setMessage] = useState('');
  const [USer, setUSer] = useState();
  const route: any = useRoute();

  useEffect(() => {
    async function fetch() {
      const currentUSer: any = await Auth.currentAuthenticatedUser().then((res: any) => res);

      await setUSer(currentUSer.attributes.sub);
    }
    fetch();
  }, []);

  async function sendMessage() {
    console.log('entering');
    if (Message) {
      const chatIds: any = await API.graphql(
        graphqlOperation(createMessage, {
          input: { content: Message, userId: USer, charRoomId: route.params.chatRoomId },
        })
      );
      await API.graphql(
        graphqlOperation(updateChatRoom, {
          input: {
            id: route.params.chatRoomId,
            lastMessageId: chatIds.data.createMessage.id,
          },
        })
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Icon name='mood' size={27} color='#fff8'></Icon>

        <TextInput
          placeholderTextColor={colorScheme.text}
          style={styles.textInput}
          placeholder='Message'
          onChangeText={setMessage}
          multiline
        />
        <Icon3 name='attachment' size={24} color='#fff8' style={styles.icon}></Icon3>
        {!Message && <Icon2 name='camera' size={27} color='#fff8' style={styles.icon}></Icon2>}
      </View>
      <View style={styles.iconContainer}>
        <Text onPress={() => sendMessage()}>
          {!Message && <Icon name='mic' size={27} color='#fff' />}
          {Message && <Icon name='send' size={27} color='#fff' />}
        </Text>
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
