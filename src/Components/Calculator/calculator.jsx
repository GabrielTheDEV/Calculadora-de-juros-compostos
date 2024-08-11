import React,{ useContext } from 'react'
import { InputComponent } from '../InputComponent'
import { MyContext } from '../../context/Context'

export function Calculator(){
    const { setField, handleClick } = useContext(MyContext)  
   

    const handleChange = (e) => {
        const {name , value } = e.target         
           setField(name ,value)
    }

    return(
        <div className='w-full h-auto flex flex-col p-2.5 gap-2'>
                
            <InputComponent     // <-- Componente do input
                label={'Valor inicial'} 
                name={'initial'} 
                handle={handleChange} 
                placeholder={'R$0'}
            />
             <InputComponent 
                label={'Aportes mensais'} 
                name={'monthly'} 
                handle={handleChange} 
                placeholder={'R$0'}
            />    
            <InputComponent
                label={'Taxa de juros'} 
                name={'rate'} 
                handle={handleChange} 
                placeholder={'0%'}
            />
             <InputComponent
                label={'Período'} 
                name={'period'} 
                handle={handleChange} 
                placeholder={'0'}
            />    

                <div className='flex gap-2.5 my-2.5'>
                    <input type="checkbox" name="..." id="..." onClick />
                    <span>Calculo automatico</span>
                </div>
                

                <button onClick={handleClick} className=' w-80 p-2.5 rounded-full bg-green-600 text-white text-lg font-medium hover:bg-green-800  '
                > Calcular </button>

        </div>
    )
}