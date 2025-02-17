"use client"

import {createContext, useContext} from "react";

interface OverlayContextType {
    isOpen: boolean;
    showOverlay: () => void;
    hideOverlay: () => void;
}

export const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export function useOverlay() {
    const context = useContext(OverlayContext);

    if (!context) {
        throw new Error("useOverlay must be used inside a OverlayProvider");
    }
    return context;
}