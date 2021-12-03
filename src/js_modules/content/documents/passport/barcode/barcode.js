import './barcode.scss'


export const Barcode = (props) => {


 return (
      <div className="barcode">
          <div className="barcode__wrapper">
                <div className="barcode__text">Штрихкод діятиме 3 хв</div>
                <div className="barcode__imgwrapper"><img src={props.barcode} alt=""></img></div>
                <div className="barcode__number">{props.barcodeNumber}</div>
          </div>
      </div>
      )
}


