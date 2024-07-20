
import { Calculator } from './Components/Calculator/calculator'
import { ResultTable } from './Components/ResultTable/ResultTable'
import { useCalculateReducer } from './Hooks/calculateReducer'

export function Layout() {
  const { state, setField, calculate } = useCalculateReducer()

  function handleReceiveValue( value ){
      Object.entries(value).forEach(([field , value ]) => setField(field , value) )
      
      console.log(state)
  }

  return ( 
    <section className='main'>
      <h1>Calculadora de Juros Compostos</h1>
        
      <div className='content'>
        <Calculator takeValue={handleReceiveValue}/>
        <ResultTable data={ calculate }/>
      </div> 
    </section>
  )
}


