/**
 * Created by HP on 2017/1/11
 */
import {createAction} from 'redux-act'
export const REFRESH = 'REFRESH'
export const LOGIN  = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const refresh = createAction(REFRESH)
export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)

// export function refresh(newWaitList){
//     return{
//         type : REFRESH,
//         newWaitList : newWaitList
//     }
// }
//
// export function login(self){
//     return{
//         type : LOGIN,
//         self : self
//     }
// }
//
// export function logout(){
//     return{
//         type : LOGOUT
//     }
// }


