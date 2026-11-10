
import type { ReactNode } from "react";

interface DesktopIconProps {
    icon: ReactNode;
    name: string;
    onDoubleClick?: () => void;
}

export function DesktopIcon({
    icon,
    name,
    onDoubleClick
}: DesktopIconProps) {
    return (
        <button
            onDoubleClick={onDoubleClick}
            className="desktop-icon"
        >
            <div className="desktop-icon-visual">
                {icon}
            </div>

            <span className="desktop-icon-name">
                {name}
            </span>
        </button>
    );
}
