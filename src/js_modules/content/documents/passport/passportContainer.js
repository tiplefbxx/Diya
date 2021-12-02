import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQrCodeThunk } from '../../../../state/qr__reducer'
import { Passport } from './passport'


 const PassportContainer = (props) => {

  useEffect( () => {
    props.getQrCodeThunk()
  }, [])

 return <Passport {...props}/>
}



let mapStateToProps = (state) => {
 return {
     qrCode: state.qrCode.qrCode,
 }
}

let mapDispatchToProps = {
   getQrCodeThunk,
}


export default connect(mapStateToProps, mapDispatchToProps)(PassportContainer)