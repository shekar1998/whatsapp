import API, { graphqlOperation } from '@aws-amplify/api';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import ChatRoomMessage from '../components/ChatRoomMessage';
import MessageBar from '../components/MessageBar';
import message from '../data/Chats';
import { messageByChatRoom } from '../src/graphql/queries';
import { onCreateMessage } from '../src/graphql/subscriptions';

interface Props {}

const MessageScreen = (props: Props) => {
  const [USer, setUSer] = useState('');
  const [Message, setMessage]: any = useState();
  const route: any = useRoute();

  useEffect(() => {
    async function fetchMessages() {
      const currentUSer: any = await Auth.currentAuthenticatedUser().then((res: any) => res);
      await setUSer(currentUSer.attributes.sub);
      const messages: any = await API.graphql(
        graphqlOperation(messageByChatRoom, { charRoomId: route.params.chatRoomId, sortDirection: 'DESC' })
      );
      setMessage(messages.data.messageByChatRoom.items);
      renderFlatList()
      console.log('Before => ', Message.length);
    }
    fetchMessages();

    const newMessages: any = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
      next: async (data: any) => {
        if (data.value.data.onCreateMessage.charRoomId === route.params.chatRoomId) {
          await setMessage([...Message, data.value.data.onCreateMessage]);
          renderFlatList()
        } else {
          return;
        }
      },
    });
  }, []);

  const RenderItem = (data: any) => {
    console.log('Reandering => ', data);
    return (
      <ChatRoomMessage
        key={data.item.id}
        currentUser={USer}
        Id={data.item.user.id}
        name={data.item.user.name}
        message={data.item.content}
        createdAt={data.item.createdAt}
      />
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={Message}
        renderItem={RenderItem}
        initialNumToRender={10}
        inverted
      />
    );
  };
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={{
        uri: 'https://w0.peakpx.com/wallpaper/361/324/HD-wallpaper-nature-amazing-fog-green-hills-landscape-scary-track-train.jpg',
      }}
    >
      {renderFlatList()}

      <MessageBar />
    </ImageBackground>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  messageContainer: { flex: 1 },
  imageContainer: {
    height: '100%',
    resizeMode: 'contain',
  },
});
