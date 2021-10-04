import axios from 'axios';
import { setAllUsers, setSelectedUser, setCurrentUser, setCurrentUser2, setChatRooms } from '../redux/actions';

export function AllUsers(dispatch: any, Users: any) {

  dispatch(setAllUsers(Users));
}

export function SelectedUser(dispatch: any, Users: any) {

  dispatch(setSelectedUser(Users));
}

export function CurrentUser(dispatch: any, Users: any) {

  dispatch(setCurrentUser(Users));
}

export function CurrentUser2(dispatch: any, Users: any) {

  dispatch(setCurrentUser2(Users));
}

export function ChatRooms(dispatch: any, Users: any) {

  dispatch(setChatRooms(Users));
}