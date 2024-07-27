import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout }from './Layout.jsx'
import { Header } from './Components/Header/Header.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Layout/>
  </React.StrictMode>,
)
