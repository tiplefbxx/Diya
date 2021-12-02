import { applyMiddleware, combineReducers, createStore } from "redux";
import { qrReducer } from './qr__reducer'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
 qrCode: qrReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store