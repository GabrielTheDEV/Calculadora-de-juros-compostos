import React from 'react'
import { Calculator } from './Components/Calculator/calculator'
import { ResultTable } from './Components/ResultTable/ResultTable'
import { ContextProvider } from './context/Context'


export function Layout() {

  return ( 
    <section className='main'>
      <h1>Calculadora de Juros Compostos</h1>
        
      <div className='content'>
        <ContextProvider>

            <Calculator />
            <ResultTable />
            
        </ContextProvider>
      </div> 
    </section>
  )
}


