import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {}

const colorSchem = Colors.dark;

const index = (props: Props) => {
  const state = useSelector((state: any) => state.SelectedUsers.SelectedUsers);

  return (
    <View style={styles.conatainer}>
      <Avatar.Image style={styles.avatar} size={150} source={{ uri: state.params.all.imageUri }} />
      <View>
        <View style={styles.details}>
          <Icon style={styles.icon} name='person' size={26} color='#fff8'></Icon>
          <View style={styles.infocontainer}>
            <Text style={styles.name}>Username</Text>
            <Text style={styles.text}>{state.params.all.name}</Text>
            <Text style={{ ...styles.name, fontStyle: 'italic', width: '80%' }}>
              This name is visible for everyone in your contacts
            </Text>
          </View>
        </View>
        <View style={styles.details}>
          <Icon style={styles.icon} name='info' size={26} color='#fff8'></Icon>
          <View style={styles.infocontainer}>
            <Text style={styles.name}>Status</Text>
            <Text style={styles.text}>{state.params.all.status}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Icon style={styles.icon} name='today' size={26} color='#fff8'></Icon>
          <View style={styles.infocontainer}>
            <Text style={styles.name}>Joined Date</Text>
            <Text style={styles.text}>
              {state.params.all.createdAt.slice(0, 10)} {state.params.all.createdAt.slice(11, 16)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: colorSchem.Chatbackground,
  },
  avatar: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    margin: 10,
    marginBottom: 40,
    backgroundColor: colorSchem.Chatbackground,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infocontainer: {
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 35,
    marginTop: 4.5,
  },
  text: {
    color: colorSchem.chatScreenName,
    fontSize: 16.5,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  name: {
    color: colorSchem.text,
    marginHorizontal: 5,
    marginVertical: 2,
  },
});

{
  /* // "key": "Message-1IZc5CGlA3p4w-ZZcQEwL",
// "name": "Message",
// "params": Object {
//   "all": Object {
//     "createdAt": "2021-09-29T08:07:03.360Z",
//     "id": "ae977c94-f562-4513-89d1-c5c5a0a172f2",
//     "imageUri": "https://pbs.twimg.com/profile_images/1437400498995294210/cnhsQyO9_400x400.jpg",
//     "name": "latha6803",
//     "status": "Hi, I am using WhatsApp",
//     "updatedAt": "2021-09-29T08:07:03.360Z",
//   },
//   "image": "https://pbs.twimg.com/profile_images/1437400498995294210/cnhsQyO9_400x400.jpg",
//   "name": "latha6803",
// },
// "path": undefined, */
}
