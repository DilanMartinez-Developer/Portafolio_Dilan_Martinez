import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HB_Div from './HotBarComponent/HotBar.tsx'
import { HotBarControler } from './HotBarComponent/HotBarContext'  




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HotBarControler>
        <App />
        <HB_Div />
    </HotBarControler>
  </StrictMode> 
)
