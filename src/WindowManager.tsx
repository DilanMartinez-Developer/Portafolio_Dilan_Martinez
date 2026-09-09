import { useHotBar } from "./HotBarComponent/HotBarContext";
import { useState } from "react";

function WindowManager() {

    const { apps, toggleApp,removeApp} = useHotBar();


    const [positions, setPositions] = useState<{
        [id: string]: {
            x: number;
            y: number;
        }
    }>({});

    const [dragging, setDragging] = useState<string | null>(null);

    const [offset, setOffset] = useState({
        x: 0,
        y: 0
    });

    const startDrag = (
        e: React.MouseEvent<HTMLDivElement>,
        id: string
    ) => {

        const position = positions[id] ?? {
            x: 100,
            y: 100,
        };

        setDragging(id);

        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });

    };

    const moveWindow = (e: React.MouseEvent) => {

        if (dragging === null) return;

        setPositions(prev => {

            return {
                ...prev,
                [dragging]: {
                    x: e.clientX - offset.x,
                    y: e.clientY - offset.y
                }
            };

        });

    };

    const stopDrag = () => {
        setDragging(null);
    };

    return (
        <div
            onMouseMove={moveWindow}
            onMouseUp={stopDrag}
        >

            {apps.map(app => {

                if (!app.isOpen) {
                    return null;
                }

                const position = positions[app.id] ?? {
                    x: 100,
                    y: 100,
                    z: 1
                };

                return (
                    <div
                        key={app.id}
                        className="fixed"
                        style={{
                            left: position.x,
                            top: position.y
                        }}
                    >

                        {/* Barra superior */}
                        <div
                            onMouseDown={(e) => startDrag(e, app.id)}
                            className="cursor-move bg-gray-700 text-white h-[3vh] flex items-center px-2 flex-row"
                        >
                            
                            {app.id}

                            <div className="ml-auto flex flex-row h-full">
                                <button onClick={() => toggleApp(app.id)} className="ml-auto w-8 h-full cursor-pointer hover:bg-white/20">-    </button>
                                <button onClick={() => toggleApp(app.id)} className="ml-auto w-8 h-full cursor-pointer hover:bg-white/20">=    </button>
                                <button onClick={() => removeApp(app.id)} className="ml-auto w-8 h-full cursor-pointer hover:bg-red-500/60">x    </button>
                            </div>

                            
                        </div>

                        {/* Contenido de la aplicación */}
                        <div>
                            {app.component}
                        </div>

                    </div>
                );

            })}

        </div>
    );
}

export default WindowManager;