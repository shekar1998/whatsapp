/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCharRoomUser = /* GraphQL */ `
  subscription OnCreateCharRoomUser {
    onCreateCharRoomUser {
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
export const onUpdateCharRoomUser = /* GraphQL */ `
  subscription OnUpdateCharRoomUser {
    onUpdateCharRoomUser {
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
export const onDeleteCharRoomUser = /* GraphQL */ `
  subscription OnDeleteCharRoomUser {
    onDeleteCharRoomUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
