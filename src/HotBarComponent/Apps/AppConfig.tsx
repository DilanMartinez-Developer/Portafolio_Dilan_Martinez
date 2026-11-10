import { useHotBar } from '../HotBarContext'
import {DesktopIcon} from '../../Desktop'
import { useState } from 'react';

export function ConfigCoponent() {
    const [wallpaper, setWallpaper] = useState(
        document.querySelector("main.desktop")?.getAttribute("data-wallpaper") || "default"
    );

    const fondos = {
        default: "linear-gradient(135deg, #182848, #4b6cb7)",
        dark: "linear-gradient(135deg, #090909, #303030)",
        green: "linear-gradient(135deg, #142d1c, #47734b)",
        purple: "linear-gradient(135deg, #24143d, #68469a)"
    };

    const cambiarFondo = (fondo: keyof typeof fondos) => {
        setWallpaper(fondo);

        document.querySelector("main.desktop")?.setAttribute(
            "data-wallpaper",
            fondo
        );
    };

    return (
        <div className="flex flex-col bg-gray-800 text-white p-6 h-full w-full gap-6">

            <h1 className="text-xl font-semibold">
                Configuración
            </h1>

            <div className="flex flex-col gap-3">

                <h2 className="text-sm text-gray-400">
                    Personalización del escritorio
                </h2>

                <p className="text-sm">
                    Fondo de pantalla
                </p>

                <div className="grid grid-cols-2 gap-4">

                    {(Object.keys(fondos) as Array<keyof typeof fondos>).map(fondo => (
                        <button
                            key={fondo}
                            onClick={() => cambiarFondo(fondo)}
                            className={`h-20 rounded-lg transition-all duration-200 border-2 ${
                                wallpaper === fondo
                                    ? "border-white scale-105"
                                    : "border-white/10 hover:border-white/50"
                            }`}
                            style={{ background: fondos[fondo] }}
                            title={fondo}
                        >
                            <span className="text-white text-sm drop-shadow-md">
                                {fondo.charAt(0).toUpperCase() + fondo.slice(1)}
                            </span>
                        </button>
                    ))}

                </div>

            </div>

        </div>
    );
}



export function ConfigIcon() {
    const {toggleApp} = useHotBar();
    return (
        <button onClick={() => toggleApp("Config")} className="relative w-full h-full cursor-pointer"> 
            <img src="src\assets\img\engranaje.svg" alt="" />         
        </button>
    );
}

export function ConfigIconDesktop() {

    const { addApp } = useHotBar();

    return (
        <DesktopIcon
            icon={<img src="src\assets\img\engranaje.svg" alt="" />}
            name="Config"
            onDoubleClick={() => addApp({
                id: "Config",
                icon: <ConfigIcon />,
                component: <ConfigCoponent />,
                isOpen: true,
                size:"no"
            })}
        />
    );
}