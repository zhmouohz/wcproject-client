/**
 * Created by HP on 2017/1/11.
 */
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
export default function configureStore(state){
    return createStore(
        rootReducer,
            applyMiddleware(
                loggerMiddleware
            )
    )
}


