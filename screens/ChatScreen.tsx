import * as React from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import ChatRoomUSers from '../components/ChatListItems/ChatRoomUSers';
import FloatingButton from '../components/ChatListItems/FloatingButton';
import { useEffect, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../src/graphql/grapgCustom';
import { useIsFocused } from '@react-navigation/native';

const colorScheme = Colors.dark;

export default function TabOneScreen({ navigation }: any) {
  const [Data, setData]: any = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function fetch() {
      console.log('called first');
      const userInfo: any = await Auth.currentAuthenticatedUser().then((res: any) => res);
      const chatIds: any = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
      setData(chatIds.data.getUser.CharRoomUser.items);
      
    }
    fetch();
  }, [isFocused]);

  const RenderItem = (data: any) => {
    let id, name, profilename, imageUri, message, createdAt, all, chatRoomId,lastMessage;
    all = data.item.ChatRoom.CharRoomUsers.items[1].user;
    id = data.item.ChatRoom.CharRoomUsers.items[1].user.id;
    name = data.item.ChatRoom.CharRoomUsers.items[1].user.name;
    profilename = data.item.ChatRoom.CharRoomUsers.items[1].user.profilename;
    imageUri = data.item.ChatRoom.CharRoomUsers.items[1].user.imageUri;
    message = data.item.ChatRoom.CharRoomUsers.items[1].user.status;
    createdAt = data.item.ChatRoom.CharRoomUsers.items[1].user.createdAt;
    chatRoomId = data.item.ChatRoom.id;
    lastMessage = data.item.ChatRoom.lastMessage
    return (
      <>
        <ChatRoomUSers
          props={{
            all: all,
            id: id,
            name: name,
            profilename: profilename,
            imageUri: imageUri,
            message: message,
            createdAt: createdAt,
            chatRoomId: chatRoomId,
            lastMessage: lastMessage
          }}
          navigation={navigation}
        />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList keyExtractor={(item: any, index: number) => item.id} data={Data} renderItem={RenderItem} />
      <View style={styles.floatingbutton}>
        <FloatingButton />
      </View>
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
    color: colorScheme.text,
    padding: 10,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    color: colorScheme.text,
  },
  floatingbutton: {
    position: 'absolute',
    top: Dimensions.get('window').height - 220,
    left: Dimensions.get('window').width - 100,
    margin: 20,
  },
});
