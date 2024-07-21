import { useEffect, useState } from 'react'
import { Calculator } from './Components/Calculator/calculator'
import { ResultTable } from './Components/ResultTable/ResultTable'
import { useCalculateReducer } from './Hooks/calculateReducer'

export function Layout() {
  const { setField, sendOut} = useCalculateReducer()
  const [result , setResult] = useState(0)

  useEffect(() => {
    setResult(sendOut())
    
  },[sendOut])

  const handleReceiveValue = ( value ) => {
      Object.entries(value).forEach(
        ([field , value ]) => {
           setField(field , value)
          } 
      )
  }
  

  return ( 
    <section className='main'>
      <h1>Calculadora de Juros Compostos</h1>
        
      <div className='content'>
        <Calculator takeValue={handleReceiveValue}/>
        <ResultTable datas={result}/>
      </div> 
    </section>
  )
}


