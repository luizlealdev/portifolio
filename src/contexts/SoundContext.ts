import {createContext, useContext} from "react";
import {Howl} from "howler";

export const SoundContext = createContext<{
    openSound: Howl | null,
    switchSound: Howl | null,
    swishSound: Howl | null,
    slimeLandSound: Howl | null,
    slimeDeathSound: Howl | null,
    bubbleSound: Howl | null,
}>({
    openSound: null,
    swishSound: null,
    switchSound: null,
    slimeDeathSound: null,
    slimeLandSound: null,
    bubbleSound: null
})

export const useSound = () => useContext(SoundContext)