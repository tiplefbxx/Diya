import Slider from 'react-slick'
import './documents.scss'
import { Sertificate } from './sertificate/sertificate'
import  PassportContainer  from './passport/passportContainer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Idcard } from './idcard/idcard';



export const Documents = (props) => {


const setActiveStyle = (current, next) => {
   switch (next) {
       case 0: return props.appBodyRef.current.className = "documents__background"
       case 1: return props.appBodyRef.current.className = "passport__background"
       case 2: return props.appBodyRef.current.className = "idcard__background"
       default: return
   }
}

 let setting = {    
    beforeChange: setActiveStyle,
    onSwipe: () => console.log('swipe'),
    className:'card__swippe',
    dotsClass: 'documents__dots',
    centerMode: true,
    focusOnSelect: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
 }


 return (
  <div className="documents" id="fullpage-wrapper">
      <Slider className="documents__line" {...setting}>
          <div><Sertificate /></div>
          <div><PassportContainer /></div>
          <div><Idcard /></div>
      </Slider>
  </div>
 )
}

