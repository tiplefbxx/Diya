import qrCode from '../texure/qr/qr.png'


export const API = {

   getQrCodeAPI: () => {
       // here must be request to the server 
       let promise = new Promise( (resolve, reject) => {
          return resolve(qrCode)
       })
    
    
       return promise
   }


}