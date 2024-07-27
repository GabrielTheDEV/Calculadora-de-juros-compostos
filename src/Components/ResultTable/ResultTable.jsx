import React, { useContext } from 'react'
import './style.css'
import { MyContext } from '../../context/Context'

export function ResultTable(){
    const {sendOut} = useContext(MyContext)

    if(sendOut === undefined){
        return <div>Loading...</div>
    }
   
    return(
        <div className='ResultTable'>
            <div className='containerResult'>
               <div className='container'><span>Valor Total final : <br/> {sendOut.result ? sendOut.result.toFixed(2) : '0,00'}</span></div>
               <div className='container'><span>Valor total investido :<br/> {sendOut.totalInv ? sendOut.totalInv.toFixed(2) : '0,00'}</span></div>
               <div className='container'><span>Total de juros : <br/> {sendOut.totalRate ? sendOut.totalRate.toFixed(2) : '0,00'}</span></div>
            </div>
            
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
