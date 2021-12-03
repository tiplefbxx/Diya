import { applyMiddleware, combineReducers, createStore } from "redux";
import { qrReducer } from './qr_reducer'
import thunkMiddleware from 'redux-thunk'
import { barcode } from "./barcode_reducer";


let reducers = combineReducers({
 qrCode: qrReducer,
 barcode: barcode
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store