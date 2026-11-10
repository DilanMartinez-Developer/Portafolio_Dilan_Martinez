
import { useHotBar } from "./HotBarContext";

function HB_Div() {
    const { apps } = useHotBar();

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-12 flex justify-end items-center gap-2 px-3 bg-black/40 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">

            {apps.map(app => (
                <div
                    key={app.id}
                    className={`relative flex items-center justify-center w-10 h-10 p-2 rounded-lg transition-all duration-200 ${
                        app.isOpen
                            ? "bg-white/20 hover:bg-black/30"
                            : "bg-white/5 hover:bg-white/20"
                    }`}
                >
                    {app.icon}
                </div>
            ))}

        </div>
    );
}

export default HB_Div;
