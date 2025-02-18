"use client"

import Button from "@/components/Button";
import {Download} from "lucide-react";
import Image from "next/image";
import AndroidComponents from "@/assets/elements/android-architecture-components.svg";
import {Typewriter} from "react-simple-typewriter";
import {motion} from "framer-motion";
import {fadeInUp} from "@/animations/scrollAnimations";

export default function HeaderSection() {
    return (
        <section
            className="max-w-6xl h-screen max-md:pt-24 max-md:mb-8 mx-auto flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-24 items-center px-6"
            id="home">
            <motion.div {...fadeInUp(20, 0, 1, "some")} className="space-y-2 md:space-y-3">
                <p className="text-primary-green-light h-5">
                    <Typewriter words={["Olá, me chamo"]} loop={true} cursor={true}/>
                </p>
                <h3 className="font-inter font-bold text-font-primary text-6xl lg:text-7xl">
                    Luiz Leal
                </h3>
                <article>
                    Texto que ainda não sei o que vou colocar talvez uma
                    descrição sei lá, agora vou colocar um lorem ipsun dolor
                    sit amed.
                </article>
                <Button className="flex gap-2">
                    <Download strokeWidth={1.9} className="w-5"/>
                    Visualizar currículo
                </Button>
            </motion.div>
            <motion.div {...fadeInUp(20, 0.3, 1, "some")} className="flex justify-center items-center">
                <div className="relative md:w-96 lg:w-[480px]">
                    <Image
                        src={AndroidComponents}
                        alt="Imagem de um laptop com a logo e as cores do android."
                        layout="responsive"
                        className="w-full h-auto drop-shadow-md animate-moving"
                    />
                </div>
            </motion.div>
        </section>)
}