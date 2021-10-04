import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Menu } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Alert,
  ImageBackground,
} from 'react-native';
import Colors from '../../constants/Colors';
import messages from '../../data/Chats';
import { ChatRooms, SelectedUser } from '../../hooks/api/ApiCalls';
import { useDispatch } from 'react-redux';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createCharRoomUser, createChatRoom } from '../../src/graphql/mutations';
import Auth from '@aws-amplify/auth';
import { getUser } from '../../src/graphql/grapgCustom';

const colorScheme = Colors.dark;

interface MainProp {
  props: ChatRoomProp;
  navigation: any;
}
interface ChatRoomProp {
  all?: any;
  id: any;
  name?: string;
  profilename?: string;
  imageUri: string;
  message?: string;
  createdAt?: string;
  userName?: string;
}

const index = ({ props, navigation }: MainProp) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState();
  let userInfo:any;
  let chatIds:any;
  const dispatch = useDispatch();
  console.log(props);

  useEffect(() => {
    async function fetch() {
      await SelectedUser(dispatch, props.all);
     userInfo = await Auth.currentAuthenticatedUser().then((res: any) => res);
     chatIds = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
     console.log(chatIds);
    }
    fetch();
  }, []);

  function ImageModal() {
    setModalVisible(true);
  }

  async function Chat() {
    const userInfo: any = await Auth.currentAuthenticatedUser().then((res: any) => res);

    // Creating a chat room
    const newChatRoom: any = await API.graphql(
      graphqlOperation(createChatRoom, {
        input: {},
      })
    );

    if (!newChatRoom) {
      console.log('Failed to create the chatroom');
      return;
    }

    //Adding the selected user to the chat room
    await API.graphql(
      graphqlOperation(createCharRoomUser, {
        input: {
          userId: props.id,
          charRoomId: newChatRoom.data.createChatRoom.id,
        },
      })
    );

    //Adding the Authenticated user to tHE CHAT ROOM

    await API.graphql(
      graphqlOperation(createCharRoomUser, {
        input: {
          userId: userInfo.attributes.sub,
          charRoomId: newChatRoom.data.createChatRoom.id,
        },
      })
    );
  }

  async function handleClick() {
    navigation.navigate('Message', { image: props.imageUri, name: props.name, all: props.all });

    const CharRoomUsers: any = chatIds.data.getUser.CharRoomUser;

    if (CharRoomUsers.items.length === 0) {
      console.log('Lenght is 0');
      Chat();
      return;
    }
    let count: any = false;
    for (let i = 0; i < 1; i++) {
      for await (let data of CharRoomUsers.items) {
        if (data.ChatRoom.CharRoomUsers.items[1].user.id === props.id) {
          count = true;
        }
      }
    }
    console.log('Condition => ', count);
    if (count === false) {
      await Chat();
    }
    ChatRooms(dispatch, userInfo);
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            backgroundColor: '#0009',
            opacity: 1,
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={styles.ModalImage} source={{ uri: props.imageUri }}></Image>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => ImageModal()}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUri }} />
        </View>
      </TouchableOpacity>

      <View style={styles.details}>
        <TouchableOpacity onPress={() => handleClick()}>
          <Text style={styles.name}>{props.profilename ? props.profilename : props.name}</Text>

          <Text style={styles.message} numberOfLines={1}>
            {!props.message ? 'Hi, I am using whatsapp' : props.message}
          </Text>
        </TouchableOpacity>
      </View>
      {props.createdAt && (
        <View style={{ justifyContent: 'space-around', height: 60 }}>
          <Text style={styles.date}>Yesterday</Text>
          <View style={styles.numOfMsgContainer}>
            <Text style={styles.numOfMsg}>1</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 450,
    height: 80,
    flexDirection: 'row',
    padding: 3,
    alignItems: 'center',
  },
  imageContainer: {
    padding: 10,
    width: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: Dimensions.get('window').width - 50,
    resizeMode: 'cover',
    marginTop: 8,
  },
  ModalImage: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
    padding: 10,
    overflow: 'hidden',
  },
  details: {
    justifyContent: 'space-around',
    height: 58,
    marginLeft: 70,
    width: Dimensions.get('window').width - 180,
  },
  name: {
    color: colorScheme.chatScreenName,
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    color: colorScheme.chatScreenMessage,
    fontSize: 14,
  },
  date: {
    color: colorScheme.Scroll,
    fontSize: 14,
  },
  numOfMsgContainer: {
    justifyContent: 'space-around',
    width: 19,
    height: 19,
    borderRadius: 20,
    backgroundColor: colorScheme.Scroll,
    marginLeft: 46,
  },
  numOfMsg: {
    color: colorScheme.text,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 12.5,
  },
});

export default index;
