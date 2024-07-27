import React,{ useContext } from 'react'
import { InputComponent } from '../InputComponent'
import { MyContext } from '../../context/Context'

import './style.css'

export function Calculator(){
    const { setField, handleClick } = useContext(MyContext)  
   

    const handleChange = (e) => {
        const {name , value } = e.target         
           setField(name ,value)
    }

    return(
        <div className='calculator'>
                
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

                <div className='checkboxConteiner'>
                    <input type="checkbox" name="..." id="..." onClick />
                    <span>Calculo automatico</span>
                </div>
                

                <button onClick={handleClick}> Calcular </button>

        </div>
    )
}