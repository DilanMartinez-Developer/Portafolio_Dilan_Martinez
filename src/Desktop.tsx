interface DesktopIconProps {
    icon: React.ReactNode;
    name: string;
    onDoubleClick?: () => void;
}

export function DesktopIcon({
    icon,
    name,
    onDoubleClick
}: DesktopIconProps) {

    return (
        <button onDoubleClick={onDoubleClick} className="w-[6vh] h-[6vh] flex flex-col items-center justify-center cursor-pointer">
            <div className="text-3xl">
                {icon}
            </div>

            <p className="text-white text-sm text-center">
                {name}
            </p>
        </button>
    );
}