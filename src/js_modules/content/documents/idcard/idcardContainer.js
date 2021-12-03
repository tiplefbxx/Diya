import { connect } from "react-redux"
import { getBarcodeThunk } from "../../../../state/barcode_reducer"
import { getQrCodeThunk } from "../../../../state/qr_reducer"
import { Idcard } from "./idcard"


const IdcardContainer = (props) => {
  
    return <Idcard {...props} />
}



const mapStateToProps = (state) => {
    return {
        qrCode: state.qrCode.qrCode,
        barcode: state.barcode.barcode,
        barcodeNumber: state.barcode.barcodeNumber,
    }
}

const mapDispatchToProps = {
    getQrCodeThunk,
    getBarcodeThunk,
}





export default connect(mapStateToProps, mapDispatchToProps)(IdcardContainer)


