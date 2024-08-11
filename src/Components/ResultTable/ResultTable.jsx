import React, { useContext } from 'react'
import { MyContext } from '../../context/Context'

export function ResultTable(){
    const {sendOut} = useContext(MyContext)
    
    if(sendOut === undefined){
        return <div>Loading...</div>
    }
   
    return(
        <div className='w-full p-5 border border-black'>
            <div className='w-full flex items-center justify-center gap-2'>
               <div className='w-full text-center font-medium p-2.5 border-b hover:border-black bg-white'><span>Valor Total final : <br/> {sendOut.result ? sendOut.result.toFixed(2) : '0,00'}</span></div>
               <div className='w-full text-center font-medium p-2.5 border-b hover:border-black bg-white'><span>Valor total investido :<br/> {sendOut.totalInv ? sendOut.totalInv.toFixed(2) : '0,00'}</span></div>
               <div className='w-full text-center font-medium p-2.5 border-b hover:border-black bg-white'><span>Total de juros : <br/> {sendOut.totalRate ? sendOut.totalRate.toFixed(2) : '0,00'}</span></div>
            </div>
            
            <div className='w-full flex items-center my-2 p-2 border-b border-black'>
               <div className='w-full p-2.5 bg-white text-center font-medium'><span>Meses</span></div>
               <div className='w-full p-2.5 bg-white text-center font-medium'><span>Juros</span></div>
               <div className='w-full p-2.5 bg-white text-center font-medium'><span>Total investido</span></div>
               <div className='w-full p-2.5 bg-white text-center font-medium'><span>Juros total</span></div>
               <div className='w-full p-2.5 bg-white text-center font-medium'><span>Total acumulado</span></div>
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
