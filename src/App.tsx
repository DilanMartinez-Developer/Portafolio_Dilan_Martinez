import {WebIconDesktop} from './HotBarComponent/Apps/AppWeb'
import {ConfigIconDesktop} from './HotBarComponent/Apps/AppConfig'
import {ABMEIconDesktop} from './HotBarComponent/Apps/AboutMe'


import {DesktopIcon} from './Desktop'

//funcion de app para pruebas
function App() {



    //boton para poner y boton para sacar pines del hotbar
    return (
      <>
        <section>
            <DesktopIcon icon={<ABMEIconDesktop/>} name="About Me"/>
        </section>

        <section>
            <DesktopIcon icon={<ConfigIconDesktop/>} name="Config"/>
        </section>
        
        <section>
            <DesktopIcon icon={<WebIconDesktop/>} name="web"/>
        </section>
      </>
    )
}

export default App