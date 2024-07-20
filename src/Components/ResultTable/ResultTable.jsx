import React from 'react'
import './style.css'
import { DataGrid } from '../DataGrid/DataGrid'

export function ResultTable({datas}){


    return(
        <div className='ResultTable'>
            <div className='containerData'>
               <div className='container'><span>Meses</span></div>
               <div className='container'><span>Juros</span></div>
               <div className='container'><span>Total investido</span></div>
               <div className='container'><span>Juros total</span></div>
               <div className='container'><span>Total acumulado</span></div>
            </div>

           {datas && datas.map(log =>{
                return(
                  <div className='containerData' key={log.id} >
                        <div className='container'><span>{log.mounth}</span></div>
                        <div className='container'><span>{log.interest}</span></div>
                        <div className='container'><span>{log.invested}</span></div>
                        <div className='container'><span>{log.totalInterest}</span></div>
                        <div className='container'><span>{log.accumulated}</span></div>
                    </div>
                )
           })} 
        </div>
    )
}