import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'macro-css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
