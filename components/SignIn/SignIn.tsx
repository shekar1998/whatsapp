import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Auth } from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';

import useForm from './useForm';
import { validateEmail, validatePassword } from './validation';
export default function SignIn(props: any) {
  const initialValues = { email: '', password: '' };

  const [values, setvalues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = React.useState();

  async function onSubmit() {
    const { email, password }: any = values;
    console.log(email, password);

    try {
      const user = await Auth.signIn({
        username: email,
        password,
      });
      props.onStateChange('signedIn', user);
    } catch (error: any) {
      setError(error.message);
    }
  }

  if (props.authState === 'signIn')
    return (
      <ScrollView>
        <View style={FormStyles.container}>
          <View style={FormStyles.bgcontainer}>
            <Text style={FormStyles.title}>SIGN IN</Text>
            <View style={FormStyles.labelWrapper}>
              <Icon name='email' size={13} style={FormStyles.labelIcon} />
              <Text style={FormStyles.labelText}> Email </Text>
            </View>
            <TextInput
              style={FormStyles.textbox}
              autoCompleteType='email'
              onChangeText={(text) => setvalues({ ...values, email: text })}
              value={values.email}
              placeholder='Enter Email'
            />
            <View style={FormStyles.labelWrapper}>
              <Icon name='lock' size={13} style={FormStyles.labelIcon} />
              <Text style={FormStyles.labelText}> Password</Text>
            </View>
            <TextInput
              style={FormStyles.textbox}
              autoCompleteType='password'
              onChangeText={(text) => setvalues({ ...values, password: text })}
              value={values.password}
              placeholder='Enter Password'
              secureTextEntry={true}
            />

            <TouchableOpacity style={FormStyles.button} onPress={onSubmit}>
              <Text style={FormStyles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>

            <View style={FormStyles.formLinks}>
              <TouchableWithoutFeedback onPress={() => props.onStateChange('signUp', {})}>
                <Text style={FormStyles.linkText}>Sign Up</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => props.onStateChange('forgotPassword', {})}>
                <Text style={FormStyles.linkText}>Forgot Password</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  else return <></>;
}

const fullWidth = Dimensions.get('window').width; //full width

export const deepSquidInk = '#152939';
export const linkUnderlayColor = '#FFF';
export const errorIconColor = '#30d0fe';

export const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
  },
  bgcontainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
  },
  textbox: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 13,
    color: 'black',
    height: 50,
    width: 350,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'royalblue',
    height: 50,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    //fontFamily: 'Palatino-Bold',
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  errorTextbox: {
    borderColor: 'red',
    borderWidth: 1,
  },
  labelWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    width: 350,
  },
  labelText: {
    color: 'black',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  labelIcon: {
    color: 'black',
    marginRight: 5,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    //fontFamily: 'Palatino-Bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  error: {
    color: 'red',
    fontWeight: '600',
    fontSize: 12,
  },
  errorIcon: { color: 'white', alignItems: 'center', paddingRight: 5 },
  formError: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'firebrick',
  },
  inputError: {
    color: 'firebrick',
  },
  errorMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  formLinks: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: 'black',
    fontSize: 12,
    //fontFamily: 'Palatino-BoldItalic',
    textShadowColor: 'white',
    textShadowRadius: 6,
    textTransform: 'uppercase',
  },
});
