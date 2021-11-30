import './services.scss'
import {useState} from 'react'
import police from '../../../texure/services/police.png'
import petition from '../../../texure/services/checkicon.png'
import columns from '../../../texure/services/columns.png'
import car from '../../../texure/services/car.png'
import covid from '../../../texure/services/covid.png'
import bagagge from '../../../texure/services/bagagge.png'
import table from '../../../texure/services/table.png'
import blocks from '../../../texure/services/blocks.png'


export const Services = (props) => {
let [listMode, changeListMode] = useState(false)

 const changeStatusList = () => {
    if(listMode === false) changeListMode(true)
    else changeListMode(false)
 }


 let tableStyle = listMode? 'services__blocks' : ''

 return( 
   <div className="services">
     <div className="services__top">
       <h2 className="services__title">Категорії</h2>

      {listMode?
       <div className="services__mode" onClick={changeStatusList}><div><img alt="" src={table} ></img></div><span>Списком</span></div> : 
       <div className="services__mode" onClick={changeStatusList}><div><img alt="" src={blocks} ></img></div><span>Плитками</span></div>
      }

       <div className="services__input"><input placeholder={'Пошук послуги'}></input></div>
     </div>
     <div className="services__tags">
       <div className={"services__list" + ' ' + tableStyle}>
         <li><span><img src={covid}></img></span><span>COVID-сертифікати</span></li>
         <li><span><img src={police}></img></span><span>Штрафи ПДР</span></li>
         <li><span><img src={car}></img></span><span>Заміна водійського</span></li>
         <li><span><img src={bagagge}></img></span><span>Податки ФОП</span></li>
         <li><span><img src={columns}></img></span><span>Виконавчі провадження</span></li>
         <li><span><img src={petition}></img></span><span>Петиції</span></li>
       </div>
     </div>

   </div>
)
 
}

