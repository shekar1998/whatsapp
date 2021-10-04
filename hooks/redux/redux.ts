import { createStore, combineReducers } from 'redux';
import { AllUserReducer, SelectedUserReducer, CurrentUserReducer, CurrentUserReducer2, ChatRoomsReducer } from './reducer';

const reducer = combineReducers({
 AllUsers:AllUserReducer,
 SelectedUsers:SelectedUserReducer,
 CurrentUser:CurrentUserReducer,
 CurrentUser2:CurrentUserReducer2,
 ChatRooms: ChatRoomsReducer
});

const store = createStore(reducer);

export default store;
