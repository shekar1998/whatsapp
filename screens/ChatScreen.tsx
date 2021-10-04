import * as React from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import ChatlistItem from '../components/ChatListItems';
import ChatRoom from '../data/ChatRooms';
import { useSelector } from 'react-redux';
import { ChatRooms } from '../hooks/api/ApiCalls';
import FloatingButton from '../components/ChatListItems/FloatingButton';
import { useEffect } from 'react';

const colorScheme = Colors.dark;

export default function TabOneScreen({ navigation }: any) {
  let data: any = ChatRooms;
  const state: any = useSelector((state: any) => console.log(state));
  console.log(state);
  
   useEffect(() => {
    async function fetch() {
      console.log('called first');

      // if (state) {
      //   data = state;
      // }
    }
    fetch();
  }, []);

  const RenderItem = (data: any) => {
    let id, name, profilename, imageUri, message, createdAt;
    if (data === ChatRoom) {
      id = data.item.id;
      name = data.item.user[1].name;
      profilename = null;
      imageUri = data.item.item.user[1].user.imageUri;
      message = data.item.lastMessage.content;
      createdAt = data.item.lastMessage.createdAt;
    } else {
      id = data.item.ChatRoom.id;
      name = data.item.ChatRoom.CharRoomUsers.items[1].user.name;
      profilename = data.item.ChatRoom.CharRoomUsers.items[1].user.profilename;
      imageUri = data.item.ChatRoom.CharRoomUsers.items[1].user.imageUri;
      message = data.item.ChatRoom.CharRoomUsers.items[1].user.status;
      createdAt = data.item.ChatRoom.CharRoomUsers.items[1].user.createdAt;
    }
    return (
      <>
        <ChatlistItem
          props={{
            id: id,
            name: name,
            profilename: profilename,
            imageUri: imageUri,
            message: message,
            createdAt: createdAt,
          }}
          navigation={navigation}
        />
      </>
    );
  };
  return (
    <View style={styles.container}>
      {/* <FlatList keyExtractor={(item: any) => item.id} data={data} renderItem={RenderItem} /> */}
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
