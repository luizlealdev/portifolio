"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LuizLealsImage from "@/assets/images/luiz-leal.png";
import AboutLargeBackground from "@/assets/elements/playlist_acitive_dark.svg";
import AboutSmallBackground from "@/assets/elements/playlist_active_dark_sm.svg";

export default function AboutSection() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <main
            className="relative h-screen w-screen px-6 bg-cover bg-center bg-no-repeat flex items-center justify-center"
            id="about"
            style={{
                backgroundImage: `url(${windowWidth >= 768 ? AboutLargeBackground.src : AboutSmallBackground.src})`,
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:gap-10 lg:gap-16 items-center md:justify-center">
                <Image src={LuizLealsImage} alt="Imagem de Luiz Leal" className="w-72 md:w-80 drop-shadow-sm"/>
                <article className="space-y-2 md:w-1/2 md:space-y-3 bg-foreground-primary">
                    <h3 className="text-4xl text-white font-inter font-bold">Sobre mim</h3>
                    <p> Me chamo Luiz André Leal, tenho 18 anos, sou
                        programador e técnico em informática. Atualmente
                        estou me especializando em desenvolvimento de
                        aplicativos android nativos, mas tenho experiência
                        também em desenvolvimento web front-end e back-end.
                        Sempre busco aprender novas coisas e aprimorar meus
                        conhecimentos 🧠💪.</p>
                </article>
            </div>
        </main>
    );
}
