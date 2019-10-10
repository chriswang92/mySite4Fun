import {REGISTER_USER, LOGIN_USER, GET_ALL_USERS} from '../actions/apis';
import {USER_STATE} from '../../config/constants';
import Immutable from 'immutable';

export default function userReducer(state=[], action) {
    // const state = rootState.get([USER_STATE]);
    switch(action.type) {
        case REGISTER_USER:
            console.log('in userReducer->REGISTER_USER, state=',state,', action=',action);
            const immuData = 
            [ ...state,
                {
                    id: action.payload.newRecord.id,
                    username: action.payload.newRecord.userInfo.username,
                    password: action.payload.newRecord.userInfo.password
                }
            ];
            // return state.withMutations(mutableState => 
            //     mutableState.set(immuData));
            return immuData;

        case GET_ALL_USERS:
            console.log('in userReducer->GET_ALL_USERS, state=',state,', action=',action);
            const immuData2 = 
            [ ...state,
                {
                    allUsers: action.payload.userInfo
                }
            ];
            // return state.withMutations(mutableState => 
            //     mutableState.set(immuData));
            return immuData2;

        case LOGIN_USER:

        default:
            return state;
    }
}