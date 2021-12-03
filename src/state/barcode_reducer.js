import { API } from "./API"
import defaultBarcode from '../texure/qr/defaultQr.png'

const defaultState = {
    barcode: defaultBarcode,
    barcodeNumber: '0000000000000'
}


export const barcode = (state = defaultState, action) => {
   switch (action.type) {
       case 'SET_BARCODE':
           return {
            ...state,
            barcode: action.barcode
        }
        case 'SET_BARCODE_NUMBER':
           return {
            ...state,
            barcodeNumber: action.barcodeNumber
        }

       default: return state
   }
}




const setBarcode = (barcode) => {
    return {type: 'SET_BARCODE', barcode}
}

const setBarcodeNumber = (barcodeNumber) => {
    return {type: 'SET_BARCODE_NUMBER', barcodeNumber}
}

export const getBarcodeThunk = () => {
    return (dispatch) => {
       API.getBarcodeAPI()
       .then((response) =>{
           dispatch(setBarcode(response[0]))
           dispatch(setBarcodeNumber(response[1]))
       })
    }
}



