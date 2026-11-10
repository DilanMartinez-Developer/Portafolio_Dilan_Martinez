
import { WebIconDesktop } from './HotBarComponent/Apps/AppWeb';
import { ConfigIconDesktop } from './HotBarComponent/Apps/AppConfig';
import { ABMEIconDesktop } from './HotBarComponent/Apps/AboutMe';
import DskStyle from './dskStyle';

import { useHotBar } from './HotBarComponent/HotBarContext';
import { ABMEIcon, ABMECoponent } from "./HotBarComponent/Apps/AboutMe";
import { useEffect } from "react";


function App() {
    const { addApp } = useHotBar();
    useEffect(() => {
        addApp({
            id: "About Me",
            icon: <ABMEIcon />,
            component: <ABMECoponent />,
            isOpen: true,
            size: "size-256"
        });
    }, []);
    return (
        
        <DskStyle>
            <section className="desktop-icons">
                <ABMEIconDesktop/>

                <ConfigIconDesktop />

                <WebIconDesktop />
            </section>
        </DskStyle>
    );
}

export default App;
