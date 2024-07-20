import React,{ useState } from 'react'

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
        if(values.initial > 0 && values.rate > 0 && values.period > 0) {
            return takeValue(values)
            
        } else{
            return console.log('incomplete field :/')
        }
    }

    return(
        <div className='calculator'>
                
                <p>Valor inicial :</p>
                <input type="text" 
                    name='initial'
                    onChange={handleChange}
                    placeholder='R$0' 
                />

                <p>Aportes mensais :</p>
                <input type="text" 
                    name='monthly'
                    onChange={handleChange}
                    placeholder='R$0' 
                />

                <p>taxa de juros :</p>
                <input type="text" 
                    name='rate'
                    onChange={handleChange}
                    placeholder='0,00%' 
                />
                
                <p>Período :</p>
                <input type="text" 
                    name='period'
                    onChange={handleChange}
                    placeholder='0' 
                />
                

                <div className='checkboxConteiner'>
                    <input type="checkbox" name="x" id="x" />
                    <span>Calculo automatico</span>
                </div>
                

                <button onClick={handleClick}> Calcular </button>

        </div>
    )
}