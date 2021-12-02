import './qr_code.scss'

export const QrCode = (props) => {

 return (
      <div className="qr">
          <div className="qr__wrapper">
                <div className="qr__text">QR-код діятиме 3 хв</div>
                <div className="qr__imgwrapper"><img src={props.qrCode} alt=""></img></div>
                <div className="qr__icons">
                      <div className="qr__icon"></div>
                </div>
          </div>
      </div>
      )
}


