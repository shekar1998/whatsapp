export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      profilename
      CharRoomUser {
        items {
          id
          userId
          charRoomId
          createdAt
          updatedAt
          ChatRoom {
            id
            CharRoomUsers {
              items {
                user {
                  name
                  imageUri
                  id
                  createdAt
                  updatedAt
                  status
                  profilename
                }
              }
            }
            lastMessage {
              id
              content
              createdAt
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
