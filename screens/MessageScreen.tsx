import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatRoomMessage from '../components/ChatRoomMessage';
import MessageBar from '../components/MessageBar';
import message from '../data/Chats';

interface Props {}

const MessageScreen = (props: Props) => {
  const route: any = useRoute();
  const [searchQuery, setSearchQuery] =useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  const RenderItem = (data: any) => {

    return (
      <ChatRoomMessage
        key={data.item.id}
        Id={data.item.user.id}
        name={data.item.user.name}
        message={data.item.content}
        createdAt={data.item.createdAt}
      />
    );
  };
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={{uri:"https://w0.peakpx.com/wallpaper/361/324/HD-wallpaper-nature-amazing-fog-green-hills-landscape-scary-track-train.jpg" }}
    >
      <FlatList keyExtractor={(item) => item.id} data={message} renderItem={RenderItem} inverted />

      <MessageBar />
    </ImageBackground>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  messageContainer: { flex: 1 },
  imageContainer: {
    height:"100%",
    resizeMode:"contain"
  }
});
