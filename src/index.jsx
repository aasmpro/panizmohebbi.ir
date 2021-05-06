import React from 'react'
import ReactDOM from 'react-dom'
import './assets/font/fontawesome/css/all.min.css'
import './assets/css/main.min.css'

import { Main } from './views/main'

ReactDOM.render(
  <React.StrictMode className="full-screen">
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
