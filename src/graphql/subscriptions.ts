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
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
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
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
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
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
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
      messages {
        items {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        content
        createdAt
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
          lastMessageId
          createdAt
          updatedAt
        }
        updatedAt
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
      messages {
        items {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        content
        createdAt
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
          lastMessageId
          createdAt
          updatedAt
        }
        updatedAt
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
      messages {
        items {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        content
        createdAt
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
          lastMessageId
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      content
      createdAt
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
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      content
      createdAt
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
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      content
      createdAt
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
        messages {
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          createdAt
          userId
          charRoomId
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
