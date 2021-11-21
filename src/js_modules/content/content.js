import './content.scss'
import { Sertificate } from './sertificate/sertificate'
import { Passport } from './passport/passport'

export const Content = (props) => {

 return (
  <main className="content">
      <div className="content__line">
          <Passport />
      </div>
  </main>
 )
}

