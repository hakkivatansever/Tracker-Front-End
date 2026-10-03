import type { MouseEventHandler, ReactNode } from "react";

interface Props {
    onClick: MouseEventHandler;
    children: ReactNode;
}

export default function Button({
    onClick,
    children,
}: Props) {
    return (
        <button
            className="p-2 text-white text-md bg-cyan-600 hover:bg-cyan-800 transition-colors cursor-pointer rounded-lg"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

