"use client"

import Image from "next/image";

import AndroidIcon from "@/assets/elements/android-logo.svg";
import {ChevronRight, MenuIcon, SunMedium} from "lucide-react";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import {useOverlay} from "@/contexts/OverlayContext";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {showOverlay, hideOverlay} = useOverlay()

    const toggleMenu = () => {
        if (!isMenuOpen) {
            showOverlay()
        } else {
            hideOverlay();
        }

        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header
                className="fixed w-screen top-0 flex justify-between lg:justify-start items-center py-2 px-6 h-16 bg-background z-10">
                <a href="#">
                    <Image
                        src={AndroidIcon}
                        width={0}
                        height={0}
                        className="w-10/12 px-2"
                        alt="Android Logo"
                    />
                </a>


                <nav className="flex items-center max-md:hidden lg:ml-auto">
                    <ul className="flex md:gap-5 lg:gap-8">
                        <li>
                            <a href="#" className="hover:text-white p-2">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-white p-2">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-white p-2"
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-white p-2">
                                Tecnologias
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white p-2">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>


                <button
                    className="lg:ml-14 max-md:hidden p-2 rounded-lg hover:bg-foreground transition-all ease-in-out duration-350 hover:text-white">
                    <SunMedium/>
                    <span className="sr-only">Alterar tema</span>
                </button>


                <button
                    className="md:hidden p-2 rounded-lg hover:bg-foreground transition-all ease-in-out duration-350 hover:text-white"
                    onClick={() => toggleMenu()}>
                    <MenuIcon/>
                    <span className="sr-only">Abrir menu</span>
                </button>
            </header>


            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div initial={{x: "100%"}} animate={{x: 0}}
                                exit={{x: "100%"}}
                                transition={{type: "tween", duration: 0.25, ease: "easeInOut"}}
                                className="fixed top-0 right-0 h-screen w-9/12 bg-foreground p-4 z-50">
                        <button
                            className="p-2 rounded-lg hover:bg-foreground transition-all ease-in-out duration-350 hover:text-white"
                            onClick={() => toggleMenu()}>
                            <ChevronRight/>
                            <span className="sr-only">Fechar menu</span>
                        </button>

                        <nav className="h-full flex items-center justify-center">
                            <ul className="flex flex-col items-center gap-8 text-lg">
                                <li>
                                    <a href="#" className="hover:text-white p-2">
                                        Início
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-white p-2">
                                        Sobre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="hover:text-white p-2"
                                    >
                                        Projetos
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="hover:text-white p-2">
                                        Tecnologias
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-white p-2">
                                        Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <button
                            className="fixed bottom-4 right-4 p-2 rounded-lg hover:bg-foreground transition-all ease-in-out duration-350 hover:text-white">
                            <SunMedium/>
                            <span className="sr-only">Alterar tema</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;
