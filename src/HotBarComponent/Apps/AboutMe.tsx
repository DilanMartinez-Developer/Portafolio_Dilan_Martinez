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
    //ventana del "portafolio"
    <div className='border shadow-xl relative min-w-128 min-h-128 bg-[url(../src/assets/img/BGPRT.svg)] bg-gray-900/90 overflow-y-scroll size-256 h-200 scroll-smooth select-none  '>
        {/*contenido principal */}
        <section className='p-4'>
            {/*about me*/}
            <section className='flex flex-col justify-center bg-[#2e6b38]/30 bg-center bg-auto bg-fixed rounded-b-lg shadow-xl/30 p-8'>
                <div className=" sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                    <div className='p-3 flex flex-row bg-gray-800/85 rounded-lg'>
                        <img className="mr-2 h-36 rounded-full sm:mx-0 sm:shrink-0 object-contain shadow-xl/30" src="src/assets/img/RatAsp1.jpeg" alt="Me" />
                        <div className="space-y-2 text-center sm:text-left ">
                            <div className="space-y-0.5 ml-8 mt-4">
                              <p className="text-3xl font-semibold dark:text-white text-shadow-lg/20">Dilan Ezequiel Martinez Biscayzacu</p>
                              <p className="font-serif text-gray-500 dark:text-gray-400 text-shadow-lg/20">AUXILIAR TÉCNICO EN INFORMATICA</p>
                            <button onClick={() => window.open("../src/assets/doc/CVDM.pdf", "_blank")} className='transform duration-300 hover:scale-110  flex flex-row bg-mist-900 p-1 mt-4 rounded-lg ring-2 ring-blue-50/10 shadow-xl/20'>
                                <p className="font-serif text-gray-50/80">Curriculum</p>
                            </button>
                            </div>
                        </div>
                        
                  </div>  
                </div>
                <div className="bg-white dark:bg-gray-800/85 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                      <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm ">
                        Soy un desarrollador junior con gran interes en construir y aprender sobre un tema que me interesa desde pequeño, la programacion.
                        desde hace bastante tiempo uso la programacion para solucionar mis problemas, automatizando procesos, desarrollando herramientas y buscandole la vuelta 
                        a cada problema con el que me topaba, dandole una salucion, aunque a veces no muy practica, siempre muy divertida para desarrollar.

                        a medida que adquiri nuevos conocimientos queria intentar desarrollar nuevas cosas, un ejemplo es este portafolio, que, aunque no sea original, el proceso de desarrollarlo
                        desde cero, solo con una idea general, fue algo increible y aprendi mucho.
                      </p>
                </div>               
            </section>
            {/*experiencia*/}
            <section className="flex flex-wrap gap-y-8 justify-center mt-4 scrollbar-auto scroll-smooth overflow-auto">
                <EXP titulo="Pasantía analista GeneXus en Bantotal"
                    contenido={
                    <>  
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">Fui parte de una pasantia laboral brindada por Bantotal, con el fin de apoyar a jovenes en el comienzo de su trayectoria profecional.Desarrolle soluciones en conjunto a un equipo formado por pasantes, y me fue encargado realizar un conjunto de las soluciones desarrolladas para su posterior subida a prod.</p>
                    </>}/> 
                    
                <EXP titulo="Asistente virtual con IA"
                    contenido={
                    <>  
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">FComo uno de mis proyectos personales mas interesantes, desarrolle un asistente por voz, el cual, mediante una IA local o web responde tu peticion mediante un jsonpudiendo gestionar aplicaciones de windows, abrir, cerrar, minimizar. Ademas pudiendo responder dudas.Aun sigo trabajando, mi objetivo es poder pedirle que, por ejemplo, mientras desarrollo le pida que busque una funcion, este la busque y me la guarde en ctrl+c</p>
                    </>}/>  
                    
                <EXP titulo="Organizador de archivos MP4"
                    contenido={
                    <>  
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">Sistema que organiza archivos de video, esto con el fin de, tras terminar de grabar usando OBS, este entienda que fue lo que grabe, lo enumere por fecha de creacioncree una carpeta por tipo "juego,pelicula,etc" y guarde los archivos en esta, esto con el fin de tener los videos grabados de manera ordenada y separada</p>
                    </>}/>  
                    
                <EXP titulo="Portafolio OS"
                    contenido={
                    <>  
                        <img className="float-left h-24 w-36" src="src/assets/img/prueba2.PNG" />
                        <img className="float-right h-36 w-54" src="src/assets/img/prueba1.PNG" />

                        <p className="clear-left">Me era importante mejorar mi portafolio, para que fuera mas profecional, pero queria mostrar la parte que me intesa, que es el desarrollo back-end, asi que puse en accion mis conocimientos para poder realizar este proyecto.</p>
                    </>}/> 
            
            </section>
        </section>
        {/*pie de pagina*/}
        <section className='shrink-0 w-full h-auto bg-gray-900/90 flex flex-row justify-center pb-3'>
            <div className='pie-pagina-div'>
                <button onClick={() => window.open("https://www.youtube.com/@DyZacu", "_blank")} className='redsocial-pie-pagina'>
                                <img className='size-8' src="./src/assets/img/youtube.svg" alt="Youtube" />
                </button>
            </div>
            <div className='pie-pagina-div'>
                <button onClick={() => window.open("https://www.linkedin.com/in/dilan-martinez-31801a27b/", "_blank")} className='redsocial-pie-pagina'>
                                <img className='size-8' src="./src/assets/img/linkedin.svg" alt="Linkedin" />
                </button>
            </div>
            <div className='pie-pagina-div'>
                <button onClick={() => window.open("https://github.com/DilanMartinez-Developer", "_blank")} className='redsocial-pie-pagina'>
                                <img className='size-8' src="./src/assets/img/github-142.svg" alt="Github" />
                </button>
            </div>
                    
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
        <button onClick={() => toggleApp("About Me")} className="relative w-full h-full cursor-pointer"> 
            <img src="src/assets/img/aboutMePro.svg" alt="" />
        </button>
    );
}

export function ABMEIconDesktop() {

    const { addApp } = useHotBar();

    return (
        <DesktopIcon
            icon={<img src="src/assets/img/aboutMePro.svg" alt="" />}
            name="About Me"
            onDoubleClick={() => addApp({
                id: "About Me",
                icon: <ABMEIcon />,
                component: <ABMECoponent />,
                isOpen: true,
                size: "size-256"
        })}/>
    );
}