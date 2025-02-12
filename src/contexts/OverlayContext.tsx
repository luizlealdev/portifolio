"use client"

import {createContext, useContext, useState} from "react";

interface OverlayContextType {
    isOpen: boolean;
    showOverlay: () => void;
    hideOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export function OverlayProvider({children}: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const showOverlay = () => setIsOpen(true);
    const hideOverlay = () => setIsOpen(false);

    return (<OverlayContext.Provider value={{isOpen, showOverlay, hideOverlay}}>{children}</OverlayContext.Provider>)
}

export function useOverlay() {
    const context = useContext(OverlayContext);

    if (!context) {
        throw new Error("useOverlay must be used inside a OverlayProvider");
    }
    return context;
}