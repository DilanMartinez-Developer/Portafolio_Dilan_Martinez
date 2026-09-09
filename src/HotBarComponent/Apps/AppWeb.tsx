import { useHotBar } from '../HotBarContext'

export function WebCoponent() {
    return (
        <div className="bg-gray-800 text-white p-10 h-[15vh] w-[30vh]">
            <h1>Google</h1>
        </div>
    );
}
export function WebIcon() {
    const {toggleApp} = useHotBar();
    return (
        <button onClick={() => toggleApp("navegador")} className="relative  w-full h-full cursor-pointer hover:bg-white/50"> 
            🌐
            <div className="w-2/3 h-[5px] bg-[#77942E] absolute bottom-0 left-1/2 -translate-x-1/2" /> 
        </button>
    );
}