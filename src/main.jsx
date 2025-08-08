import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SyntaxeJsx from './1-Decouverte/SyntaxeJsx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SyntaxeJsx />
  </StrictMode>,
)
