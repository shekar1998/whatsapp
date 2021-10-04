import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';
import Navigation from '../navigation';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { Provider, useDispatch } from 'react-redux';

import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { getUser, listUsers } from '../src/graphql/queries';
import { createUser } from '../src/graphql/mutations';
import store from '../hooks/redux/redux';
import { AllUsers, CurrentUser, CurrentUser2 } from '../hooks/api/ApiCalls';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { S3Client } from '@aws-sdk/client-s3';
Amplify.configure(config);

function MainScreen() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    async function FetchUser() {
      //bypasscache - true because to make sure that we are getting the latest user and not the user from cache memory.
      const loggedInUser = await Auth.currentAuthenticatedUser({ bypassCache: true }).then((res: any) => res);

      const region = 'REGION';
      const client = new S3Client({
        region,
        credentials: fromCognitoIdentityPool({
          client: new CognitoIdentityClient({ region }),
          // Replace IDENTITY_POOL_ID with an appropriate Amazon Cognito Identity Pool ID for, such as 'us-east-1:xxxxxx-xxx-4103-9936-b52exxxxfd6'.
          identityPoolId: 'IDENTITY_POOL_ID',
        }),
      });
      
      //get the user from backend with the user ID(sub) from Auth
      if (loggedInUser) {

        const userData: any = await API.graphql(graphqlOperation(getUser, { id: loggedInUser.attributes.sub }));
        const AlluserData: any = await API.graphql(graphqlOperation(listUsers, {}));
        CurrentUser2(dispatch, userData);
        CurrentUser(dispatch, loggedInUser);
        AllUsers(dispatch, AlluserData.data.listUsers.items);
        if (userData.data.getUser) {
          console.log('The userAlready exists');
          return;
        } else {
          const newUser = {
            id: loggedInUser.attributes.sub,
            name: loggedInUser.username,
            imageUri: 'https://pbs.twimg.com/profile_images/1437400498995294210/cnhsQyO9_400x400.jpg',
            status: 'Hi, I am using WhatsApp',
          };

          await API.graphql(
            graphqlOperation(createUser, {
              input: newUser,
            })
          );
        }
      }
    }
    FetchUser();
  }, []);

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar style='light' />
    </SafeAreaProvider>
  );
}

export default withAuthenticator(MainScreen);
