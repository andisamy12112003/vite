import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import "./index.css"
import ContextProvider from './components/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <Home/>
    </ContextProvider>
  </StrictMode>,
)
