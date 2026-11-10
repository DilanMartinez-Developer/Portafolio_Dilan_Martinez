import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HB_Div from './HotBarComponent/HotBar.tsx'
import { HotBarControler } from './HotBarComponent/HotBarContext'  
import WindowManager from './WindowManager'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HotBarControler>
        <App />
          <WindowManager/>
        <HB_Div />
    </HotBarControler>
  </StrictMode> 
)
