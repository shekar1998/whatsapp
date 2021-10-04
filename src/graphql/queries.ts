/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCharRoomUser = /* GraphQL */ `
  query GetCharRoomUser($id: ID!) {
    getCharRoomUser(id: $id) {
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
export const listCharRoomUsers = /* GraphQL */ `
  query ListCharRoomUsers(
    $filter: ModelCharRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        charRoomId
        user {
          id
          name
          imageUri
          status
          profilename
          createdAt
          updatedAt
        }
        ChatRoom {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CharRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
