import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { RootTabScreenProps } from '../types';
import ChatlistItem from '../components/ChatListItems';
import ChatRoom from '../data/ChatRooms';
import { listUsers } from '../src/graphql/queries';
import { AllUsers } from '../hooks/api/ApiCalls';
import { useDispatch, useSelector } from 'react-redux';

const colorScheme = Colors.dark;

export default function contactScreen({ navigation }:any) {
  const dispatch = useDispatch();

  const alluser = useSelector((state: any) => state.AllUsers.AllUsers);
  const state: any = useSelector((state: any) => state.CurrentUser.CurrentUser);  

  console.log(alluser);
  let count: any = 1;

  

  const RenderItem = (data: any) => {

    return (
      <>
        <ChatlistItem
          props={{
            all: data.item,
            id: data.item.id,
            name: data.item.name,
            profilename: data.item.profilename,
            imageUri: data.item.imageUri,
            message: data.item.status,
          }}
          navigation={navigation}
        />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {alluser ? (
        <FlatList key={count} data={alluser} renderItem={RenderItem} />
      ) : (
        <View>
          <Text>Loading....</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme.Chatbackground,
  },
});
