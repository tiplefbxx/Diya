import Slider from 'react-slick'
import {slickNext} from 'react-slick'
import './documents.scss'
import { Sertificate } from './sertificate/sertificate'
import { Passport } from './passport/passport'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRef, useState } from 'react';


export const Documents = (props) => {

let [currentPosition, setCurrentPosition] = useState(1)

const setActiveStyle = () => {
   setCurrentPosition(currentPosition++)
   console.log(currentPosition)
}


const setNewPage = () => {
    console.log(slickNext)
}


 let setting = {    
    beforeChange: setActiveStyle,
    className:'card__swippe',
    centerMode: true,
    focusOnSelect: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1
 }



 return (
  <div className="documents" id="fullpage-wrapper">
       <div className="documents__buttons">
              <div onClick={setNewPage}></div>
              <div onClick={setNewPage}></div>
          </div>
      <Slider className="documents__line" {...setting}>
          <div><Sertificate /></div>
          <div><Passport /></div>
          <div><Passport /></div>
      </Slider>
  </div>
 )
}

