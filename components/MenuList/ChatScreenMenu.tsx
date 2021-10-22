import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateUser } from '../../src/graphql/mutations';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';
import { CurrentUser2 } from '../../hooks/api/ApiCalls';
import { useDispatch } from 'react-redux';

interface Props {}

const colorSchem = Colors.dark;

export default function ChatScreenMenu() {
  const [Profile, setProfile]: any = useState();
  const [StatusCheck, setStatusCheck] = useState(false);
  const [NameCheck, setNameCheck] = useState(false);

  const [Name, setName]: any = useState();
  const dispatch: any = useDispatch();
  const state: any = useSelector((state: any) => state.CurrentUser.CurrentUser);
  const state2: any = useSelector((state: any) => state.CurrentUser2.CurrentUser2);

  let loggedInUser: any;
  let userData: any;
  
  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    if (!state2.data.getUser.profilename) {
      setProfile(false);
    }
    loggedInUser = await Auth.currentAuthenticatedUser({ bypassCache: true }).then((res: any) => res);

    userData = await API.graphql(graphqlOperation(getUser, { id: loggedInUser.attributes.sub }));

    CurrentUser2(dispatch, userData);
  }
  async function UpdateProfileName() {
    const UpdateUser = {
      id: state2.data.getUser.id,
      profilename: Name,
    };

    await API.graphql(
      graphqlOperation(updateUser, {
        input: UpdateUser,
      })
    );
    await fetch();
    setName(null);
    setNameCheck(false)
  }

  async function StatusChange() {
    const UpdateUser = {
      id: state2.data.getUser.id,
      status: Name,
    };

    await API.graphql(
      graphqlOperation(updateUser, {
        input: UpdateUser,
      })
    );
    await fetch();
    setStatusCheck(false);
    setName(null);
  }

  return (
    <ScrollView style={styles.conatainer}>
      <View style={styles.conatainer}>
        <Avatar.Image style={styles.avatar} size={150} source={{ uri: state2.data.getUser.imageUri }} />
        <View>
          {state2.data.getUser.profilename && (
            <View style={styles.details}>
              <Icon style={styles.icon} name='person' size={26} color='#fff8'></Icon>
              {NameCheck && (
                <View style={styles.infocontainer}>
                  <Text style={styles.name}>Status</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      style={styles.textInput}
                      placeholderTextColor={colorSchem.text}
                      placeholder={'Profile Name'}
                      maxLength={30}
                      multiline
                      onChangeText={(text: any) => setName(text)}
                    />
                    <Text onPress={() => UpdateProfileName()} style={styles.text2}>
                      Update
                    </Text>
                  </View>
                </View>
              )}
              {!NameCheck && (
                <View style={styles.infocontainer}>
                  <Text style={styles.name}>Profile Name</Text>
                  <Text style={styles.text}>
                    {state2.data.getUser.profilename}
                    {'                     '}
                    <Icon onPress={() => setNameCheck(true)} name='edit' size={23} color='#fff8'></Icon>
                  </Text>
                  <Text style={{ ...styles.name, fontStyle: 'italic', width: '80%' }}>
                    This name is visible for everyone in your contacts
                  </Text>
                </View>
              )}
            </View>
          )}
          <View style={styles.details}>
            <Icon style={styles.icon} name='person' size={26} color='#fff8'></Icon>
            <View style={styles.infocontainer}>
              <Text style={styles.name}>Username</Text>
              <Text style={styles.text}>{state.signInUserSession.accessToken.payload.username}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Icon style={styles.icon} name='email' size={26} color='#fff8'></Icon>
            <View style={styles.infocontainer}>
              <Text style={styles.name}>Email</Text>
              <Text style={styles.text}>{state.attributes.email}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Icon style={styles.icon} name='lightbulb' size={26} color='#fff8'></Icon>
            {StatusCheck && (
              <View style={styles.infocontainer}>
                <Text style={styles.name}>Status</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor={colorSchem.text}
                    placeholder={'Status'}
                    maxLength={30}
                    multiline
                    onChangeText={(text: any) => setName(text)}
                  />
                  <Text onPress={() => StatusChange()} style={styles.text2}>
                    Update
                  </Text>
                </View>
              </View>
            )}
            {!StatusCheck && (
              <View style={styles.infocontainer}>
                <Text style={styles.name}>Status</Text>
                <Text style={styles.text}>
                  {state2.data.getUser.status}
                  {'       '}
                  <Icon
                    onPress={() => setStatusCheck(true)}
                    style={{ alignSelf: 'center', justifyContent: 'flex-end' }}
                    name='edit'
                    size={23}
                    color='#fff8'
                  ></Icon>
                </Text>
              </View>
            )}
          </View>
          <View style={styles.details}>
            <Icon style={styles.icon} name='phone' size={26} color='#fff8'></Icon>
            <View style={styles.infocontainer}>
              <Text style={styles.name}>Mobile</Text>
              <Text style={styles.text}> +91 {state.attributes.phone_number.slice(2, 20)}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Icon style={styles.icon} name='today' size={26} color='#fff8'></Icon>
            <View style={styles.infocontainer}>
              <Text style={styles.name}>Joined Date</Text>
              <Text style={styles.text}>
                {state2.data.getUser.createdAt.slice(0, 10)} {' at '}
                {state2.data.getUser.createdAt.slice(11, 16)}
              </Text>
            </View>
          </View>
          {!state2.data.getUser.profilename && (
            <View style={styles.details}>
              <Icon style={styles.icon} name='warning' size={26} color='#fff8'></Icon>
              <View style={styles.infocontainer}>
                <Text style={styles.name}>You don't have a profile name yet</Text>
                <Text style={styles.text}>
                  To Set the profile name
                  <Text style={styles.button} onPress={() => setProfile(!Profile)}>
                    Click here
                  </Text>
                </Text>
                {Profile && (
                  <View style={styles.profileName}>
                    <TextInput
                      style={styles.textInput}
                      placeholderTextColor={colorSchem.text}
                      placeholder={'Profile Name'}
                      maxLength={15}
                      onChangeText={(text: any) => setName(text)}
                    />
                    <Text onPress={() => UpdateProfileName()} style={styles.text2}>
                      Update
                    </Text>
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

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
    justifyContent: 'flex-end',
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
  button: {
    backgroundColor: 'transparent',
    color: colorSchem.Scroll,
    fontSize: 15,
    marginTop: 5,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  textInput: {
    width: Dimensions.get('window').width - 250,
    paddingHorizontal: 5,
    color: colorSchem.text,
    fontSize: 15.5,
    borderColor: colorSchem.text,
    borderBottomWidth: 1,
  },
  profileName: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  text2: {
    color: colorSchem.chatScreenName,
    fontSize: 14.5,
    marginTop: 20,
    marginHorizontal: 10,
    borderColor: '#fff9',
    borderWidth: 0.4,
    paddingHorizontal: 20,
    backgroundColor: colorSchem.Scroll,
    paddingVertical: 10,
    borderRadius: 30,
  },
});
