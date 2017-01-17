/**
 * Created by HP on 2017/1/12.
 */
import React from 'react'


const LoginButton = (props)=> {
    const {loginHandle, logoutHandle, user} = props
    if (user == null || user == undefined || user == "") {
        return <a onClick={e => loginHandle(prompt('请输入用户名'))}>登录</a>
    }
    else {
        return <a onClick={e => logoutHandle()}>{user}注销</a>
    }
}
export default LoginButton