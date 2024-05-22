import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { HashRouter } from 'react-router-dom'
    //HashRouter se puede usar mientras se desarrolla el código 

      //También se puede usar para producción:
//   <BrowserRouter>
//   <App />
// </BrowserRouter>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  
    <App />
    </HashRouter>
  </React.StrictMode>,
)
