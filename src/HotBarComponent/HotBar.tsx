import { useHotBar } from "./HotBarContext";

function HB_Div() {
    //
    const { apps } = useHotBar();
    //div del hotbar, dentro tiene el sisema para "usar" los elementos dados por app
    return (
        <div className="bg-[#2f4015] fixed bottom-0 left-0 w-full h-[4vh] flex justify-end">

            {apps.map(app => (
                <div key={app.id} className="w-[4vh] h-full flex items-center justify-center">
                    {app.icon}
                </div>

            ))}

        </div>
    );
}

export default HB_Div;