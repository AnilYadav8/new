import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import Context from'./Context.jsx'
createRoot(document.getElementById('root')).render(
<Context.Provider value='koi mil jay'>
  <App/>
  </Context.Provider>
)
// // import './index.css'

// createRoot(document.getElementById('root')).render(
//   // <BrowserRouter/>
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


