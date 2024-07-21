import React,{ useState } from 'react'
import { InputComponent } from '../InputComponent'
import './style.css'



export function Calculator( {takeValue} ){
    const [values , setValues] = useState({
        initial: 0,
        monthly: 0,
        rate: 0,
        period: 0
    })

    function handleChange(e) {
        const {name , value } = e.target

       setValues( prev => ({
            ...prev, [name]: value
       }))
    }

    function handleClick() {
        if(values.initial > 0 && values.rate > 0 && values.period > 0) { // Verifica se os seguintes campos estão prenchidos
            return takeValue(values)

        } else{
            return alert('algum campo esta faltando')
        }
    }

    return(
        <div className='calculator'>
                
            <InputComponent 
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
                    <input type="checkbox" name="x" id="x" onClick />
                    <span>Calculo automatico</span>
                </div>
                

                <button onClick={handleClick}> Calcular </button>

        </div>
    )
}