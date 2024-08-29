import React, { useContext } from 'react'
import { MyContext } from '../../context/Context'

export function Table(){
    const {sendOut} = useContext(MyContext)
    
    if(sendOut === undefined){
        return <div>Loading...</div>
    }
   
    return(
        <div className='w-full h-1/2 p-2 rounded-xl border shadow-lg'>
            <div className='w-full flex items-center justify-center gap-2'>
               <div className='w-full text-center font-medium p-2.5 border-b  bg-white'>
                    <span>Valor final acumulado : <br/> {sendOut.result ? sendOut.result.toFixed(2) : '0,00'}</span>
                </div>
               <div className='w-full text-center font-medium p-2.5 border-b  bg-white'>
                    <span>Valor total investido :<br/> {sendOut.totalInv ? sendOut.totalInv.toFixed(2) : '0,00'}</span>
               </div>
               <div className='w-full text-center font-medium p-2.5 border-b  bg-white'>
                    <span>Total de juros : <br/> {sendOut.totalRate ? sendOut.totalRate.toFixed(2) : '0,00'}</span>
                </div>
            </div>
            
            <div class="w-full max-w-4xl bg-white rounded-lg overflow-y-auto">
                <table class="w-full table-auto border-collapse">
                    <thead class="bg-green-600 text-white">
                        <tr>
                            <th className="px-4 py-2">Meses</th>
                            <th className="px-4 py-2">Juros</th>
                            <th className="px-4 py-2">Total Investido</th>
                            <th className="px-4 py-2">Total de Juros</th>
                            <th className="px-4 py-2">Valor Acumulado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {sendOut.table && sendOut.table.map((data , index) => (
                            <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                                <td className="p-4">{data.period}</td>
                                <td className="p-4">{0}</td>
                                <td className="p-4">{data.amount}</td>
                                <td className="p-4">{data.totalRate}</td>
                                <td className="p-4">{data.totalInv}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
