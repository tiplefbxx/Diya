import './idcard.scss'
import { useState } from 'react'
import qrButtonPassive from '../../../../texure/qr/qr_mode_passive.png'
import qrButtonActive from '../../../../texure/qr/qr_mode_active.png'
import barcodeButtonPassive from '../../../../texure/qr/barcode_mode_passive.png'
import barcodeButtonActive from '../../../../texure/qr/barcode_mode_active.png'
import { Barcode } from '../passport/barcode/barcode'
import { QrCode } from '../passport/qr/qr_code'


export const IdCardBack = (props) => {
let [mode, setMode] = useState('qr')


 return (
      <div className='card__back idcardBack'>
          <div className='idcardBack__content'>
          {mode === 'qr'? <QrCode qrCode={props.qrCode} /> : <Barcode barcode={props.barcode} barcodeNumber={props.barcodeNumber} />}
          </div>
          <div className='idcardBack__icons'>
              <div className="idcardBack__icon">
                  <div className="idcardBack__imgwrapper" onClick={ () => setMode('qr')}><img src={mode === 'qr'? qrButtonActive : qrButtonPassive } alt=""></img></div>
                  <p>QR-код</p>
                  </div>
              <div className="idcardBack__icon">
                  <div className="idcardBack__imgwrapper" onClick={ () => setMode('barcode')}><img src={mode === 'barcode'? barcodeButtonActive : barcodeButtonPassive} alt=""></img></div>
                  <p>Штрих-код</p>
                  </div>
          </div>
      </div>
      )
}


