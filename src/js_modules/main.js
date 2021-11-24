import { Content } from './content/content'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { createRef } from 'react';
import './main.scss'

export const Main = (props) => {
let backgroundRef = createRef()

 return (
 <div ref={backgroundRef} className="main__wrapper">
    <Header />
    <Content />
    <Footer backgroundRef={backgroundRef}/>
 </div>)
}

