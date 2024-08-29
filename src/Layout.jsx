import React from 'react'
import { Calculator } from './Components/Calculator/calculator'
import { Table } from './Components/Table/Table'
import { ContextProvider } from './context/Context'


export function Layout() {

  return ( 
    <section className='mx-10'>
      <h1 className='font-medium '>Calculadora de Juros Compostos</h1>
        
      <div className='w-full h-auto lg:flex p-10'>
        <ContextProvider>

            <Calculator />
            <Table />
            
        </ContextProvider>
      </div> 
    </section>
  )
}


