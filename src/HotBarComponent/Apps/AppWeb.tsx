import { useHotBar } from '../HotBarContext'
import {DesktopIcon} from '../../Desktop'

import { useState } from 'react';


export function WebCoponent() {
    const [busqueda, setBusqueda] = useState("");
    const [pagina, setPagina] = useState("");
    const [resultados, setResultados] = useState(false);

    const buscar = (e: React.FormEvent) => {
        e.preventDefault();
        if (!busqueda.trim()) return;

        setResultados(true);
        setPagina("");
    };

    const abrirPagina = (url: string) => {
        setPagina(url);
    };



    const resultadosDuugle = [
        {
            titulo: "Wikipedia",
            descripcion: "La enciclopedia libre. Artículos e información sobre cualquier tema.",
            url: `https://es.wikipedia.org/wiki/Especial:Buscar?search=${encodeURIComponent(busqueda)}`
        },
        {
            titulo: "Internet Archive",
            descripcion: "Biblioteca digital con libros, películas, música y archivos históricos.",
            url: `https://archive.org/search?query=${encodeURIComponent(busqueda)}`
        },
        {
            titulo: "Marginalia Search",
            descripcion: "Buscador independiente para descubrir páginas y contenido en internet.",
            url: `https://search.marginalia.nu/search?query=${encodeURIComponent(busqueda)}`
        }
    ];



    return (
        <div className="flex flex-col bg-white text-gray-800 h-[70vh] w-[80vh] overflow-hidden rounded-b-xl">

            {/* Barra superior */}
            <div className="flex items-center gap-3 px-3 py-2 bg-[#303134]">

                <button
                    onClick={() => {
                        setPagina("");
                        setResultados(false);
                        setBusqueda("");
                    }}
                    className="text-white hover:bg-white/10 rounded px-3 py-1"
                >
                    Inicio
                </button>

                <button
                    onClick={() => setPagina("")}
                    className="text-white hover:bg-white/10 rounded px-3 py-1"
                >
                    ← Resultados
                </button>

                <span className="text-gray-400 text-sm ml-auto">
                    Duugle
                </span>

            </div>

            {/* Página de inicio / resultados */}
            {!pagina ? (
                <div className="flex-1 overflow-y-auto">

                    <div className={`flex flex-col items-center ${resultados ? "pt-8" : "justify-center h-full"}`}>

                        <h1 className="text-5xl font-medium mb-8">
                            <span className="text-blue-500">D</span>
                            <span className="text-red-500">u</span>
                            <span className="text-yellow-500">u</span>
                            <span className="text-blue-500">g</span>
                            <span className="text-green-500">l</span>
                            <span className="text-red-500">e</span>
                        </h1>

                        <form
                            onSubmit={buscar}
                            className="flex items-center w-[75%] border border-gray-300 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <input
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                placeholder="Buscar en Duugle..."
                                className="flex-1 outline-none text-sm"
                            />

                            <button type="submit" className="text-gray-500">
                                Buscar
                            </button>
                        </form>

                    </div>

                    {/* Resultados */}
                    {resultados && (
                        <div className="max-w-[650px] mx-auto mt-8 px-5">

                            <p className="text-xs text-gray-500 mb-6">
                                Resultados para: {busqueda}
                            </p>

                            {resultadosDuugle.map((resultado, index) => (
                                <div key={index} className="mb-7">

                                    <p className="text-xs text-gray-500 mb-1">
                                        {new URL(resultado.url).hostname}
                                    </p>

                                    <button
                                        onClick={() => abrirPagina(resultado.url)}
                                        className="text-blue-700 text-lg hover:underline text-left"
                                    >
                                        {resultado.titulo}
                                    </button>

                                    <p className="text-sm text-gray-600 mt-1">
                                        {resultado.descripcion}
                                    </p>

                                </div>
                            ))}

                        </div>
                    )}

                </div>
            ) : (

                /* Navegación interna */
                <iframe
                    src={pagina}
                    className="flex-1 w-full border-none"
                    title="Página web"
                />

            )}

        </div>
    );
}



export function WebIcon() {
    const {toggleApp} = useHotBar();
    return (
        <button onClick={() => toggleApp("web")} className="relative w-full h-full cursor-pointer"> 
            <img src="src/assets/img/chrome-logo-svgrepo-com.svg" alt="" />
        </button>
    );
}

export function WebIconDesktop() {

    const { addApp } = useHotBar();

    return (
        <DesktopIcon
            icon={<img src="src/assets/img/chrome-logo-svgrepo-com.svg" alt="" />}
            name="web"
            onDoubleClick={() => addApp({
                id: "web",
                icon: <WebIcon />,
                component: <WebCoponent />,
                isOpen: true,
                size: "no"
        })}/>
    );
}