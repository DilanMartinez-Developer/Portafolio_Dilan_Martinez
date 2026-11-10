import { useState, type ReactNode } from "react";

interface DskStyleProps {
    children: ReactNode;
}

export default function DskStyle({ children }: DskStyleProps) {
    const [wallpaper, setWallpaper] = useState<
        "default" | "dark" | "green" | "purple"
    >("default");

    return (
        <main className="desktop" data-wallpaper={wallpaper}>
            {children}
        </main>
    );
}