import { API } from "./API"
import defaultQr from '../texure/qr/defaultQr.png'

const defaultState = {
    qrCode: defaultQr
}


export const qrReducer = (state = defaultState, action) => {
   switch (action.type) {
       case 'SET_QRCODE':
           return {
            ...state,
            qrCode: action.qrCode
           }

       default: return state
   }
}




const setQrCode = (qrCode) => {
    return {type: 'SET_QRCODE', qrCode}
}

export const getQrCodeThunk = () => {
    return (dispatch) => {
       API.getQrCodeAPI()
       .then((response) => dispatch(setQrCode(response)))
    }
}



