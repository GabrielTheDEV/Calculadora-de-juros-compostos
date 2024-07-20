import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout }from './Layout.jsx'
import './index.css'
import { Header } from './Components/Header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Layout/>
  </React.StrictMode>,
)
