/**
 * Created by HP on 2017/1/12.
 */
import React from 'react'


const WCButton = (props)=> {
    const {reserveHandle}=props
    return <button onClick={e=>reserveHandle(e)}>预定/取消</button>
}
export default WCButton