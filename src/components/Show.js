/**
 * Created by HP on 2017/1/11.
 */
import React from 'react'

const Show = (props)=> {
    const {waitUsers} = props
    if (waitUsers.length == 0) {
        return <div style={{display: "inline-block", float: "left"}}> 没人</div>
    }
    else {
        return (
            <div style={{display: "inline-block", float: "left"}}>
                当前使用者:{waitUsers[0]}
                <ul>

                    {waitUsers.filter(user=>user != waitUsers[0]).map(user =>
                        <li key={user}>
                            {user}
                        </li>)
                    }
                </ul>
            </div>
        )

    }
}

export default Show
//

