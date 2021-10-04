/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCharRoomUser = /* GraphQL */ `
  mutation CreateCharRoomUser(
    $input: CreateCharRoomUserInput!
    $condition: ModelCharRoomUserConditionInput
  ) {
    createCharRoomUser(input: $input, condition: $condition) {
      id
      userId
      charRoomId
      user {
        id
        name
        imageUri
        status
        profilename
        CharRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      ChatRoom {
        id
        CharRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCharRoomUser = /* GraphQL */ `
  mutation UpdateCharRoomUser(
    $input: UpdateCharRoomUserInput!
    $condition: ModelCharRoomUserConditionInput
  ) {
    updateCharRoomUser(input: $input, condition: $condition) {
      id
      userId
      charRoomId
      user {
        id
        name
        imageUri
        status
        profilename
        CharRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      ChatRoom {
        id
        CharRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCharRoomUser = /* GraphQL */ `
  mutation DeleteCharRoomUser(
    $input: DeleteCharRoomUserInput!
    $condition: ModelCharRoomUserConditionInput
  ) {
    deleteCharRoomUser(input: $input, condition: $condition) {
      id
      userId
      charRoomId
      user {
        id
        name
        imageUri
        status
        profilename
        CharRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      ChatRoom {
        id
        CharRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      CharRoomUsers {
        items {
          id
          userId
          charRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      CharRoomUsers {
        items {
          id
          userId
          charRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      CharRoomUsers {
        items {
          id
          userId
          charRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
