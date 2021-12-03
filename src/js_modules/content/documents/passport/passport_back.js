import './passport.scss'
import { useState } from 'react'
import { QrCode } from './qr/qr_code'
import qrButtonPassive from '../../../../texure/qr/qr_mode_passive.png'
import qrButtonActive from '../../../../texure/qr/qr_mode_active.png'
import barcodeButtonPassive from '../../../../texure/qr/barcode_mode_passive.png'
import barcodeButtonActive from '../../../../texure/qr/barcode_mode_active.png'
import { Barcode } from './barcode/barcode'
import { barcode } from '../../../../state/barcode_reducer'

export const PassportBack = (props) => {
let [mode, setMode] = useState('qr')


 return (
      <div className='card__back passportback'>
          <div className='passportback__content'>
          {mode === 'qr'? <QrCode qrCode={props.qrCode} /> : <Barcode barcode={props.barcode} barcodeNumber={props.barcodeNumber} />}
          </div>
          <div className='passportback__icons'>
              <div className="passportback__icon">
                  <div className="passportback__imgwrapper" onClick={ () => setMode('qr')}><img src={mode === 'qr'? qrButtonActive : qrButtonPassive } alt=""></img></div>
                  <p>QR-код</p>
                  </div>
              <div className="passportback__icon">
                  <div className="passportback__imgwrapper" onClick={ () => setMode('barcode')}><img src={mode === 'barcode'? barcodeButtonActive : barcodeButtonPassive} alt=""></img></div>
                  <p>Штрих-код</p>
                  </div>
          </div>
      </div>
      )
}


