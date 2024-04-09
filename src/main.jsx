import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stepcontext from './components/Stepcontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  

  <Stepcontext>
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Stepcontext>
 

)
