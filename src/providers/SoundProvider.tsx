"use client"

import {useEffect, useState} from "react";
import {Howl} from "howler";
import {SoundContext} from "@/contexts/SoundContext";

export const SoundProvider = ({children}: { children: React.ReactNode }) => {
    const [openSound, setOpenSound] = useState<Howl | null>(null);
    const [swishSound, setSwishSound] = useState<Howl | null>(null);
    const [switchSound, setSwitchSound] = useState<Howl | null>(null);
    const [slimeLandSound, setSlimeLandSound] = useState<Howl | null>(null)
    const [slimeDeathSound, setSlimeDeathSound] = useState<Howl | null>(null)

    useEffect(() => {
        setOpenSound(
            new Howl({
                src: ["/sounds/open.mp3"],
                volume: 0.8,
                preload: true
            })
        )

        setSwishSound(
            new Howl({
                src: ["/sounds/swish.mp3"],
                preload: true,
                volume: 0.4,
            }))

        setSwitchSound(
            new Howl({
                src: ["/sounds/switch-on.mp3"],
                preload: true
            }))
        setSlimeDeathSound(
            new Howl({
                src: ["/sounds/slime-death.mp3"],
                volume: 1
            })
        )
        setSlimeLandSound(
            new Howl({
                src: ["/sounds/slime-land.mp3"],
                volume: 0.5,
                preload: true
            }))
    }, []);


    return (
        <SoundContext.Provider value={{openSound, switchSound, swishSound, slimeLandSound, slimeDeathSound}}>
            {children}
        </SoundContext.Provider>
    )
}