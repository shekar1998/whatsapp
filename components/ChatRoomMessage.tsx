import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import Colors from '../constants/Colors';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SelectedUser } from '../hooks/api/ApiCalls';

interface Props {
  currentUser:string
  Id: string;
  name: string;
  message: string;
  createdAt: string;
}

const colorScheme = Colors.dark;
const ChatRoomMessage = (props: Props) => {
  const route = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    SelectedUser(dispatch, route);
  }, []);

  const isMe = () => {
    return props.Id === props.currentUser;
  };
  const len = () => {
    return props.message.length <= 25;
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.messageBox,
          backgroundColor: isMe() === true ? colorScheme.Message : colorScheme.Header,
          alignSelf: isMe() ? 'flex-end' : 'flex-start',
          alignItems: 'flex-start',
          justifyContent: len() ? 'center' : 'space-around',
        }}
      >
        {!isMe() && (
          <Text style={{ ...styles.name, color: isMe() ? colorScheme.text : colorScheme.otherPerson }}>
            {props.name}
          </Text>
        )}

        <View
          style={{
            ...styles.messageContainer,
            flexDirection: len() ? 'row' : 'column',
            paddingTop: isMe() ? 10 : 5,
            paddingBottom: isMe() ? 10 : 8,
          }}
        >
          <Text
            style={{
              ...styles.content,
              color: colorScheme.chatScreenName,
              marginRight: len() ? 10 : 0,
              paddingLeft: 6,
              paddingRight: 6,
            }}
          >
            {props.message}
          </Text>
          <Text style={styles.time}>{moment(props.createdAt).fromNow()}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatRoomMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  messageBox: {
    maxWidth: '95%',
    borderRadius: 15,
  },
  name: {
    color: colorScheme.text,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 10,
    marginTop:4
  },
  content: {
    fontSize: 12,
    letterSpacing: 0.3,
  },
  time: {
    color: colorScheme.text,
    fontSize: 12,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  messageContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
