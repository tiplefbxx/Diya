import './preloader.scss'
import { createRef, React, useEffect } from 'react'
import logo from '../../texure/preloader/logo.png'
import arms from '../../texure/preloader/arms.png'

export const Preloader = (props) => {
let preloaderRef = createRef(1)

useEffect( () => {
    changeBackground(preloaderRef)
})


    return (
        <div className="preloader" ref={preloaderRef}>
           <div className="preloader__logo"><img src={logo}></img></div>
           <div className="preloader__arms">
               <img src={arms}></img>
               <div className="preloader__textwrapper" ><h2>Міністерство <br/> цифрової трансформації <br/> України </h2></div>   
               </div>
        </div>
    )
}




let changeBackground = (preloaderRef) => {
   setTimeout(() => {
    preloaderRef.current.classList.add('preloader__background-phase2')
   }, 1000);

   setTimeout( () => {
     hiddePreloader(preloaderRef)
   }, 4500)
}

let hiddePreloader = (preloaderRef) => {
    preloaderRef.current.classList.add('preloader__background-phase3')
}

