import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import Colors from '../../constants/Colors';
import {SelectedUser } from '../../hooks/api/ApiCalls';
import { useDispatch } from 'react-redux';
import moment from 'moment';

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
  chatRoomId?: string;
  lastMessage?: any;
}

const index = ({ props, navigation }: MainProp) => {
  const { all, id, name, profilename, imageUri, message, createdAt, userName, chatRoomId, lastMessage } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetch() {
      await SelectedUser(dispatch, props.all);
    }
    fetch();
  }, []);

  function ImageModal() {
    setModalVisible(true);
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
          <Image style={styles.ModalImage} source={{ uri: imageUri }}></Image>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => ImageModal()}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
      </TouchableOpacity>

      <View style={styles.details}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Message', {
              image: imageUri,
              name: name,
              all: all,
              chatRoomId: chatRoomId,
            })
          }
        >
          <Text style={styles.name}>{profilename ? profilename : name}</Text>

          <Text style={styles.message} numberOfLines={1}>
            {!props.lastMessage.content ? '' : props.lastMessage.content}
          </Text>
        </TouchableOpacity>
      </View>
      {createdAt && (
        <View style={{ justifyContent: 'space-around', height: 60 }}>
          <Text style={styles.date}>
            {moment(props.lastMessage.createdAt).fromNow()}
            
          </Text>
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
