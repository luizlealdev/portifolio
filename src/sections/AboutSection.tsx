"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInLeft} from "@/animations/scrollAnimations";
import {useTheme} from "next-themes";

import LuizLealsImage from "@/assets/images/luiz-leal.png";
import AboutLargeBackgroundDark from "@/assets/elements/playlist_acitive_dark.svg";
import AboutLargeBackgroundLight from "@/assets/elements/playlist_acitive_light.svg";
import AboutSmallBackgroundDark from "@/assets/elements/playlist_active_dark_sm.svg";
import AboutSmallBackgroundLight from "@/assets/elements/playlist_active_light_sm.svg"

export default function AboutSection() {
    const [windowWidth, setWindowWidth] = useState(0);

    const {resolvedTheme} = useTheme()

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <main
            className="relative h-screen w-full px-6 bg-cover bg-center bg-no-repeat flex items-center justify-center"
            id="about"
            style={{
                backgroundImage: `url(${
                    windowWidth >= 768 ?
                        resolvedTheme === "dark" ? 
                            AboutLargeBackgroundDark.src 
                            : 
                            AboutLargeBackgroundLight.src
                        : resolvedTheme == "dark" ?
                            AboutSmallBackgroundDark.src 
                            : 
                            AboutSmallBackgroundLight.src})`,
            }}
        >
            <div
                className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:gap-10 lg:gap-16 items-center md:justify-center">
                <motion.div
                    {...fadeInLeft(20, 0, 1)}>
                    <Image src={LuizLealsImage} alt="Imagem de Luiz Leal" className="w-72 md:w-80 drop-shadow-sm"/>
                </motion.div>
                <motion.article
                    {...fadeInLeft(20, 0.2, 1)}
                    className="space-y-2 md:w-1/2 md:space-y-3 bg-foreground-primary">
                    <h3 className="text-4xl text-font-primary font-inter font-bold">Sobre mim</h3>
                    <p> Me chamo Luiz André Leal, tenho 18 anos, sou
                        programador e técnico em informática. Atualmente
                        estou me especializando em desenvolvimento de
                        aplicativos android nativos, mas tenho experiência
                        também em desenvolvimento web front-end e back-end.
                        Sempre busco aprender novas coisas e aprimorar meus
                        conhecimentos 🧠💪.
                    </p>
                </motion.article>
            </div>
        </main>
    );
}
