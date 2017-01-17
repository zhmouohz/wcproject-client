/**
 * Created by HP on 2017/1/17.
 */

// export default class websocketHandle {
//

//     constructor(dispatch, refresh){
//         ws = new WebSocket("ws://localhost:8080/wc")
//         ws.onmessage = (event)=> dispatch(refresh(transReturnList(event.data)))
//     }
// }

export default (dispatch, refresh) => new Promise((resolve, reject)=> {
        let ws = new WebSocket("ws://localhost:8080/wc")
        const transReturnList = (returnList)=> {
            if (returnList == "")
                return []
            else
                return returnList.split(",").filter(name=>name != "")
        }
        ws.onopen = (event) =>resolve(ws)
        ws.onmessage = (event)=> dispatch(refresh(transReturnList(event.data)))
        ws.onerror = (event) => new Error('websocket failed')
    ws.onclose = (event) => console.log('websocket close');
    }
)

