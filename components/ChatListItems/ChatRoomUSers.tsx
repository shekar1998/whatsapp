import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Colors from '../../constants/Colors';
import messages from '../../data/Chats';
import { ChatRooms, SelectedUser } from '../../hooks/api/ApiCalls';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  console.log(props);

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
          <Image style={styles.ModalImage} source={{ uri: props.imageUri }}></Image>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => ImageModal()}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUri }} />
        </View>
      </TouchableOpacity>

      <View style={styles.details}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Message', { image: props.imageUri, name: props.name, all: props.all })}
        >
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
