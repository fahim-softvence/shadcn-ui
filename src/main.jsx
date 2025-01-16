import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './mycomponents/ContextApi'

createRoot(document.getElementById('root')).render(
  <ContextApi>
    <StrictMode>
      <App />
    </StrictMode>,
  </ContextApi>
)
