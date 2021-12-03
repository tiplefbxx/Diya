import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQrCodeThunk } from '../../../../state/qr_reducer'
import { getBarcodeThunk } from '../../../../state/barcode_reducer'
import { Passport } from './passport'


 const PassportContainer = (props) => {

  useEffect( () => {
    props.getQrCodeThunk()
    props.getBarcodeThunk()
  }, [])

 return <Passport {...props}/>
}



let mapStateToProps = (state) => {
 return {
     qrCode: state.qrCode.qrCode,
     barcode: state.barcode.barcode,
     barcodeNumber: state.barcode.barcodeNumber,
 }
}

let mapDispatchToProps = {
   getQrCodeThunk,
   getBarcodeThunk,
}


export default connect(mapStateToProps, mapDispatchToProps)(PassportContainer)