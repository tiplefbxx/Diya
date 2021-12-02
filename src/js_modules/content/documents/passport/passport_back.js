import './passport.scss'
import { QrCode } from './qr/qr_code'


export const PassportBack = (props) => {

    
 return (
      <div className="card__back passport__back">
          <QrCode {...props} />
      </div>
      )
}


