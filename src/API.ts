/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  profilename?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  profilename?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  profilename?: string | null,
  CharRoomUser?: ModelCharRoomUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCharRoomUserConnection = {
  __typename: "ModelCharRoomUserConnection",
  items?:  Array<CharRoomUser | null > | null,
  nextToken?: string | null,
};

export type CharRoomUser = {
  __typename: "CharRoomUser",
  id: string,
  userId: string,
  charRoomId: string,
  user?: User | null,
  ChatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  CharRoomUsers?: ModelCharRoomUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
  profilename?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCharRoomUserInput = {
  id?: string | null,
  userId: string,
  charRoomId: string,
};

export type ModelCharRoomUserConditionInput = {
  userId?: ModelIDInput | null,
  charRoomId?: ModelIDInput | null,
  and?: Array< ModelCharRoomUserConditionInput | null > | null,
  or?: Array< ModelCharRoomUserConditionInput | null > | null,
  not?: ModelCharRoomUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCharRoomUserInput = {
  id: string,
  userId?: string | null,
  charRoomId?: string | null,
};

export type DeleteCharRoomUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  profilename?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelCharRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  charRoomId?: ModelIDInput | null,
  and?: Array< ModelCharRoomUserFilterInput | null > | null,
  or?: Array< ModelCharRoomUserFilterInput | null > | null,
  not?: ModelCharRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharRoomUserMutationVariables = {
  input: CreateCharRoomUserInput,
  condition?: ModelCharRoomUserConditionInput | null,
};

export type CreateCharRoomUserMutation = {
  createCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharRoomUserMutationVariables = {
  input: UpdateCharRoomUserInput,
  condition?: ModelCharRoomUserConditionInput | null,
};

export type UpdateCharRoomUserMutation = {
  updateCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharRoomUserMutationVariables = {
  input: DeleteCharRoomUserInput,
  condition?: ModelCharRoomUserConditionInput | null,
};

export type DeleteCharRoomUserMutation = {
  deleteCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCharRoomUserQueryVariables = {
  id: string,
};

export type GetCharRoomUserQuery = {
  getCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharRoomUsersQueryVariables = {
  filter?: ModelCharRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharRoomUsersQuery = {
  listCharRoomUsers?:  {
    __typename: "ModelCharRoomUserConnection",
    items?:  Array< {
      __typename: "CharRoomUser",
      id: string,
      userId: string,
      charRoomId: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        profilename?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    profilename?: string | null,
    CharRoomUser?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharRoomUserSubscription = {
  onCreateCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharRoomUserSubscription = {
  onUpdateCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharRoomUserSubscription = {
  onDeleteCharRoomUser?:  {
    __typename: "CharRoomUser",
    id: string,
    userId: string,
    charRoomId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      profilename?: string | null,
      CharRoomUser?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      CharRoomUsers?:  {
        __typename: "ModelCharRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    CharRoomUsers?:  {
      __typename: "ModelCharRoomUserConnection",
      items?:  Array< {
        __typename: "CharRoomUser",
        id: string,
        userId: string,
        charRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
