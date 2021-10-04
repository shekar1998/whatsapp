import { All_USERS, SINGLE_USERS, CURRENT_USERS, CURRENT_USERS2, CHATROOM_USERS } from './actionTypes';

export const setAllUsers = (Users: any) => {
  return {
    type: All_USERS,
    payload: Users,
  };
};

export const setSelectedUser = (Users: any) => {
  return {
    type: SINGLE_USERS,
    payload: Users,
  };
};

export const setCurrentUser = (Users: any) => {
  return {
    type: CURRENT_USERS,
    payload: Users,
  };
};

export const setCurrentUser2 = (Users: any) => {
  return {
    type: CURRENT_USERS2,
    payload: Users,
  };
};

export const setChatRooms = (Users: any) => {
  return {
    type: CHATROOM_USERS,
    payload: Users,
  };
};

