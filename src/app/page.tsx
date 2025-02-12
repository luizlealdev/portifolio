"use client"

import Menu from "@/components/Menu";
import Image from "next/image";
import Button from "@/components/Button";
import {FileDown} from "lucide-react";
import {useState} from "react";

import LuizLealsImage from "@/assets/elements/luiz-leal.png"
import AndroidComponents from "@/assets/elements/android-architecture-components.svg";
import AboutLargeBackground from "@/assets/elements/playlist_acitive_dark.svg"
import AboutSmallBackground from "@/assets/elements/playlist_active_dark_sm.svg"


export default function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    return (
        <>
            <Menu/>
            <section
                className="max-w-6xl h-screen max-md:mt-24 mx-auto flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-24 items-center px-6">
                <div className="space-y-2 md:space-y-3">
                    <p className="text-primary-green-light">Olá, me chamo</p>
                    <h3 className="font-inter font-bold text-white text-6xl md:text-5xl lg:text-7xl">
                        Luiz Leal
                    </h3>
                    <article>
                        Texto que ainda não sei o que vou colocar talvez uma
                        descrição sei lá, agora vou colocar um lorem ipsun dolor
                        sit amed.
                    </article>
                    <Button className="flex gap-1">
                        <FileDown strokeWidth={1.9} className="w-5"/>
                        Baixar currículo
                    </Button>
                </div>
                <Image
                    src={AndroidComponents}
                    alt="Imagem de um laptop com a logo e as cores do android."
                    className="md:w-96 lg:w-auto"
                />
            </section>

            <main
                className="relative h-screen w-screen px-6 bg-cover bg-center bg-no-repeat flex items-center justify-center"
                id="about"
                style={{
                    backgroundImage: `url(${windowWidth >= 768 ? AboutLargeBackground.src : AboutSmallBackground.src})`,
                }}
            >
                <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:gap-10 items-center">
                    <Image src={LuizLealsImage} alt="Imagem de Luiz Leal" className="w-72"/>
                    <article className="space-y-2 md:w-1/2 md:space-y-3 bg-foreground">
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

            <section className="" id="#skills">

            </section>
        </>
    );


};
