"use client"

import {useState} from "react";
import {OverlayContext} from "@/contexts/OverlayContext";

export function OverlayProvider({children}: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const showOverlay = () => setIsOpen(true);
    const hideOverlay = () => setIsOpen(false);

    return (<OverlayContext.Provider value={{isOpen, showOverlay, hideOverlay}}>{children}</OverlayContext.Provider>)
}