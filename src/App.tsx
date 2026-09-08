import { useHotBar } from './HotBarComponent/HotBarContext'


//funcion de app para pruebas
function App() {

    const { addApp, removeApp } = useHotBar();

    //boton para poner y boton para sacar pines del hotbar
    return (
        <section>
            <button
                onClick={() => addApp({
                    id: "ajustes",
                    icon: "Config",
                    component: <div>Configuración</div>
                })}
            >
                Abrir configuración
            </button>

            <button
                onClick={() => removeApp("ajustes")}
            >
                Cerrar configuración
            </button>

        </section>
    )
}

export default App