import { useHotBar } from '../HotBarContext'
import {DesktopIcon} from '../../Desktop'
import { useState } from "react";
import type { ReactNode } from "react";
//interfaces
interface parametrosEXP {
titulo: string;
contenido: ReactNode;
}

export function ABMECoponent() {
    //seccion general, este sera el contenedor de mi verdadero portafolio
    //una seccion para mi informacion, otra para mi contecto y otra para mis proyectos y experiencia laboral
    return (
    <div className='border shadow-xl relative min-w-128 min-h-128' >
        <section className='size-256  h-auto  p-4 relative resize scroll-smooth '>
            <section className='flex justify-center bg-[url(../src/assets/img/prueba6.svg)] bg-center bg-auto bg-fixed rounded-b-lg shadow-xl/30'>
                <div className="p-10 ">
                    <img src="" alt="" />
                    <h1>Dilan Ezequiel Martinez Biscayzacu</h1>
                    <h3>AUXILIAR TÉCNICO EN INFORMATICA CON ÉNFASIS EN DESARROLLO WEB</h3>
                    <p className='block text-shadow-md'>
                        Soy un desarrollador junior con gran interes en construir y aprender sobre un tema que me interesa desde pequeño, la programacion.
                        desde hace bastante tiempo uso la programacion para solucionar mis problemas, automatizando procesos, desarrollando herramientas y buscandole la vuelta 
                        a cada problema con el que me topaba, dandole una salucion, aunque a veces no muy practica, siempre muy divertida para desarrollar.

                        a medida que adquiri nuevos conocimientos queria intentar desarrollar nuevas cosas, un ejemplo es este portafolio, que, aunque no sea original, el proceso de desarrollarlo
                        desde cero, solo con una idea general, fue algo increible y aprendi mucho.
                    </p>
                </div>
            </section>
            
            <section className="flex flex-wrap gap-y-8 justify-center mt-4">
                <EXP titulo="Pasantía analista GeneXus"
                    contenido={
                    <>  
                        <h3>Bantotal</h3>
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">Fui parte de una pasantia laboral brindada por Bantotal, con el fin de apoyar a jovenes en el comienzo de su trayectoria profecional.Desarrolle soluciones en conjunto a un equipo formado por pasantes, y me fue encargado realizar un conjunto de las soluciones desarrolladas para su posterior subida a prod.</p>
                    </>}/> 
                    
                <EXP titulo="Asistente virtual con IA"
                    contenido={
                    <>  
                        <h3>Personal</h3>
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">FComo uno de mis proyectos personales mas interesantes, desarrolle un asistente por voz, el cual, mediante una IA local o web responde tu peticion mediante un jsonpudiendo gestionar aplicaciones de windows, abrir, cerrar, minimizar. Ademas pudiendo responder dudas.Aun sigo trabajando, mi objetivo es poder pedirle que, por ejemplo, mientras desarrollo le pida que busque una funcion, este la busque y me la guarde en ctrl+c</p>
                    </>}/>  
                    
                <EXP titulo="Organizador de archivos MP4"
                    contenido={
                    <>  
                        <h3>Personal</h3>
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">Sistema que organiza archivos de video, esto con el fin de, tras terminar de grabar usando OBS, este entienda que fue lo que grabe, lo enumere por fecha de creacioncree una carpeta por tipo "juego,pelicula,etc" y guarde los archivos en esta, esto con el fin de tener los videos grabados de manera ordenada y separada</p>
                    </>}/>  
                    
                <EXP titulo="Portafolio OS"
                    contenido={
                    <>  
                        <h3>Personal</h3>
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">Me era importante mejorar mi portafolio, para que fuera mas profecional, pero queria mostrar la parte que me intesa, que es el desarrollo back-end, asi que puse en accion mis conocimientos para poder realizar este proyecto.</p>
                    </>}/> 
            </section>

            
            
        </section>
        <section className='w-full inset-x-0 bottom-0 bg-gray-900/90'>
                contacto
        </section>



    </div>
    );
}

export function EXP({ titulo, contenido }: parametrosEXP) {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <article className="articulo">
            <header className="articulo-titulo" onClick={() => setVisible(!visible)}>
                <h2>{titulo}</h2>

                <span className={`articulo-indicador ${visible ? "rotate-180" : ""}`}>
                    DyZ
                </span>
            </header>

            <div className={`articulo-contenido ${visible ? "expandido" : ""}`}>
                <div >
                    {contenido}
                </div>
            </div>
        </article>
    );
}






export function ABMEIcon() {
    const {toggleApp} = useHotBar();
    return (
        <button onClick={() => toggleApp("About Me")} className="relative  w-full h-full cursor-pointer hover:bg-white/50"> 
            About Me
            <div className="w-2/3 h-[5px] bg-[#77942E] absolute bottom-0 left-1/2 -translate-x-1/2" /> 
        </button>
    );
}

export function ABMEIconDesktop() {

    const { addApp } = useHotBar();

    return (
        <DesktopIcon
            icon="yo"
            name="About Me"
            onDoubleClick={() => addApp({
                id: "About Me",
                icon: <ABMEIcon />,
                component: <ABMECoponent />,
                isOpen: true
        })}/>
    );
}