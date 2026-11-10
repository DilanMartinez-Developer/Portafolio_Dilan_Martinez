import { createContext, useContext, useState } from "react";

//interface de prueba, para comprobar funcionamientos
interface App {
    id: string;
    icon: React.ReactNode;
    component: React.ReactNode;
    isOpen: boolean;
    size: string;
    
}
interface HotBarContextType {
    apps: App[];
    addApp: (app: App) => void;
    removeApp: (id: string) => void;
    toggleApp: (id: string) => void;
    maxApp: (id:string) => void;
}

const HotBarContext = createContext<HotBarContextType | undefined>(undefined);

export function HotBarControler({ children }: { children: React.ReactNode }) {

    const [apps, setApps] = useState<App[]>([]);
    
    const addApp = (app: App) => {
        setApps(prev => {
            //evitamos dupes
            if (prev.some(existingApp => existingApp.id === app.id)) {
                return prev;
            }
            //si no falla devuelve el componente
            return [...prev, app];
        });
    };
    //elimina un elementos por ID si existe
    const removeApp = (id: string) => {
        setApps(prev => prev.filter(app => app.id !== id));
    };

    const toggleApp = (id: string) =>{
        setApps(prev => prev.map(app => app.id === id ? { ...app, isOpen: !app.isOpen }: app));   
    };

    //no logro que funciones, despues lo veo <<<<<<
    const maxApp = (id: string) =>{
        setApps(prev => prev.map(app =>app.id === id ? {...app, size: "size-500"}: app));
    }

    //devuelve los elementos en children 
    return (
        <HotBarContext.Provider value={{ apps, addApp, removeApp, toggleApp, maxApp}}>
            {children}
        </HotBarContext.Provider>
    );
}

export function useHotBar() {
    const context = useContext(HotBarContext);
    if (!context) {
        throw new Error(
            "useHotBar debe utilizarse dentro de HotBarComponent"
        );
    }
    return context;
}