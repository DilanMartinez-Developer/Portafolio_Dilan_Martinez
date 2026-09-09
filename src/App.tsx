import { useHotBar } from './HotBarComponent/HotBarContext'
import {ConfigCoponent} from './HotBarComponent/Apps/AppConfig'
import {ConfigIcon} from './HotBarComponent/Apps/AppConfig'
import {WebCoponent} from './HotBarComponent/Apps/AppWeb'
import {WebIcon} from './HotBarComponent/Apps/AppWeb'


//funcion de app para pruebas
function App() {

    const { addApp, removeApp} = useHotBar();

    //boton para poner y boton para sacar pines del hotbar
    return (
      <>
        <section>
            <button onClick={() => addApp({
                    id: "ajustes",
                    icon: <ConfigIcon/>,
                    component: (<ConfigCoponent/>),
                    isOpen: true})}>
                Abrir config
            </button>

            <button onClick={() => removeApp("ajustes")}>
                Cerrar configuración
            </button>
        </section>
        
        <section>
            <button
                onClick={() => addApp({
                    id: "navegador",
                    icon: <WebIcon/>,
                    component: (<WebCoponent/>),
                    isOpen: true
                })}>
                Abrir Google
            </button>

            <button onClick={() => removeApp("navegador")}>
                Cerrar Google
            </button>
        </section>
      </>
    )
}

export default App