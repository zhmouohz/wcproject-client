/**
 * Created by HP on 2017/1/11.
 */
import { combineReducers } from 'redux'
import {
    REFRESH,LOGIN,LOGOUT
} from '../actions'

import {createReducer} from 'redux-act'

const listChange = createReducer({
    [REFRESH]: (state = {
        waitUsers: []
    }, payload) => ({...state, waitUsers: payload})

}, {waitUsers: []})

const login = createReducer({
    [LOGIN]: (state = {
        user: undefined
    }, payload) =>({...state, user: payload}),
    [LOGOUT]: (state, payload) =>({...state, user: undefined}),

}, {user: undefined})


const rootReducer = combineReducers({
    listChange,
    login
})
//
// function listChange(state = {
//     waitUsers: []
// },action) {
//     switch(action.type){
//         case REFRESH:
//             return {...state,waitUsers:action.newWaitList}
//         default:
//             return state
//     }
// }
// function login(state = {
//    user: undefined
// },action) {
//     switch(action.type){
//         case LOGIN:
//             return {...state,user:action.self}
//         case LOGOUT:
//             return {...state,user:undefined}
//         default:
//             return state
//     }
// }
//
//
//
//
//
//
export default rootReducer