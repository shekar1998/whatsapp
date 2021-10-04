import { reduceEachTrailingCommentRange } from 'typescript';
import { All_USERS,  SINGLE_USERS, CURRENT_USERS, CURRENT_USERS2, CHATROOM_USERS} from './actionTypes';

const AllUsersInitialState = {
  AllUsers:[]
};

const SelectedUsersInitialState = {
  SelectedUsers:[]
};

const CurrentUserInitialState = {
  CurrentUser:[]
};

const CurrentUserInitialState2 = {
  CurrentUser2:[]
};

const ChatRoomsInitialState = {
  ChatRooms:[]
};

export const AllUserReducer = (state = AllUsersInitialState, action: any) => {
  switch (action.type) {
    case All_USERS:
      return { ...state, AllUsers: action.payload };
    default:
      return state;
  }
};

export const SelectedUserReducer = (state = SelectedUsersInitialState, action: any) => {
  switch (action.type) {
    case SINGLE_USERS:
      return { ...state, SelectedUsers: action.payload };
    default:
      return state;
  }
};

export const CurrentUserReducer = (state = CurrentUserInitialState, action: any) => {
  switch (action.type) {
    case CURRENT_USERS:
      return { ...state, CurrentUser: action.payload };
    default:
      return state;
  }
};

export const CurrentUserReducer2 = (state = CurrentUserInitialState2, action: any) => {
  switch (action.type) {
    case CURRENT_USERS2:
      return { ...state, CurrentUser2: action.payload };
    default:
      return state;
  }
};

export const ChatRoomsReducer = (state = ChatRoomsInitialState, action: any) => {
  switch (action.type) {
    case CHATROOM_USERS:
      return { ...state, ChatRooms: action.payload };
    default:
      return state;
  }
};



