import qrCode from '../texure/qr/qr.png'
import barcode from '../texure/qr/barcode.png'

export const API = {

   getQrCodeAPI: () => {
       // here must be request to the server 
       let promise = new Promise( (resolve, reject) => {
          return resolve(qrCode)
       })
    
    
       return promise
   },

   getBarcodeAPI: () => {
      // here must be request to the server 
      let promise = new Promise( (resolve, reject) => {
         let number = getBarcodeNumber()  // create rendom number
         return resolve([barcode, number])
      })
   
   
      return promise
  },

  


}





const getBarcodeNumber = () => {
   let result = []
   for(let i = 0; i <= 13 ; i++) {
      result.push( Math.floor(Math.random() * (10 - 1) + 1))
   }

   return result.join('')
}

