import React, { useState } from 'react'
import './style.css'

export function ResultTable({datas}){
    if(datas === undefined){
        return <div>Loading...</div>
    }

    return(
        <div className='ResultTable'>
            <span>Valor final: {datas.toFixed(2)}</span>
           
            
            <div className='containerData'>
               <div className='container'><span>Meses</span></div>
               <div className='container'><span>Juros</span></div>
               <div className='container'><span>Total investido</span></div>
               <div className='container'><span>Juros total</span></div>
               <div className='container'><span>Total acumulado</span></div>
            </div>

           {/* {result.map(log =>{
                return(
                  <div className='containerData' key={log.id} >
                        <div className='container'><span>{log.mounth}</span></div>
                        <div className='container'><span>{log.interest}</span></div>
                        <div className='container'><span>{log.invested}</span></div>
                        <div className='container'><span>{log.totalInterest}</span></div>
                        <div className='container'><span>{log.accumulated}</span></div>
                    </div>
                )
           })}  */}
        </div>
    )
}
