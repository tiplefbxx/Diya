import { Content } from './content/content'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import './main.scss'

export const Main = (props) => {

 return (
 <div className="main__wrapper">
    <Header />
    <Content />
    <Footer />
 </div>)
}

