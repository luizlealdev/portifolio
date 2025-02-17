"use client"

import Image from "next/image";
import {ChevronRight, MenuIcon, Moon, SunMedium} from "lucide-react";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useOverlay} from "@/contexts/OverlayContext";
import {useTheme} from "next-themes";
import {useSound} from "@/contexts/SoundContext";
import {Tooltip} from "react-tooltip";

import AndroidIcon from "@/assets/elements/android-logo.svg";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const {setTheme, resolvedTheme} = useTheme();
    const {showOverlay, hideOverlay} = useOverlay()
    const {openSound, switchSound, swishSound} = useSound()

    const toggleMenu = () => {
        if (!isMenuOpen) {
            showOverlay()
        } else {
            hideOverlay();
        }

        setIsMenuOpen(!isMenuOpen);
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    const playSwishSound = (toHash: string) => {
        const hash = window.location.hash;

        if (hash !== toHash) {
            swishSound?.play()
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    const buttonToggleThemeRotateVariant = {
        initial: {rotateY: 120},
        animate: {rotateY: 0},
        transition: {duration: 0.2, ease: "easeInOut"}
    }

    return (<>
        <header
            className="fixed shadow-sm w-screen top-0 flex justify-between lg:justify-start items-center py-2 px-6 h-16 bg-background z-10">
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
                <ul className="flex md:gap-5 lg:gap-6">
                    <li>
                        <a href="#"
                           onClick={() => playSwishSound("")}
                           className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#about"
                           onClick={() => playSwishSound("#about")}
                           className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={() => playSwishSound("#projects")}
                            className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#skills"
                           onClick={() => playSwishSound("#skills")}
                           className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                            Tecnologias
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                           onClick={() => playSwishSound("#contact")}
                           className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>


            <button
                data-tooltip-id="toggle-theme-tooltip"
                data-tooltip-content="Alterar tema"
                onClick={() => {
                    toggleTheme()
                    switchSound?.play()
                }}
                className="lg:ml-14 max-md:hidden p-2 rounded-lg hover:bg-foreground-primary hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary">
                <motion.span
                    key={resolvedTheme}
                    {...buttonToggleThemeRotateVariant}
                    className="block">
                    {resolvedTheme === 'dark' ? <SunMedium strokeWidth={1.7}/> : <Moon strokeWidth={1.5}/>}
                </motion.span>
                <span className="sr-only">Alterar tema</span>
                <Tooltip
                    id="toggle-theme-tooltip"
                    style={{
                        backgroundColor: "var(--tooltip-bg)",
                        color: "var(--tooltip-text-color)",
                        padding: "5px 10px",
                        borderRadius: "6px"
                    }}
                    delayShow={500}
                    place="bottom-end"
                />
            </button>


            <button
                className="md:hidden p-2 rounded-lg hover:bg-foreground-primary transition-all ease-in-out duration-350 hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary"
                onClick={() => {
                    toggleMenu()
                    openSound?.play()
                }}>
                <MenuIcon/>
                <span className="sr-only">Abrir menu</span>
            </button>
        </header>


        <AnimatePresence mode="wait">
            {isMenuOpen && (<motion.div initial={{x: "100%"}} animate={{x: 0}}
                                        exit={{x: "100%"}}
                                        transition={{type: "tween", duration: 0.25, ease: "easeInOut"}}
                                        className="fixed top-0 right-0 h-screen w-9/12 bg-background p-4 z-50">
                <button
                    className="p-2 rounded-lg hover:bg-foreground-primary transition-all ease-in-out duration-350 focus:text-primary-blue dark:focus:text-font-primary hover:text-primary-blue dark:hover:text-font-primary"
                    onClick={() => {
                        toggleMenu()
                        openSound?.play()
                    }}>
                    <ChevronRight/>
                    <span className="sr-only">Fechar menu</span>
                </button>

                <nav className="h-full flex items-center justify-center">
                    <ul className="flex flex-col items-center gap-8 text-lg">
                        <li>
                            <a href="#"
                               className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#about"
                               className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2"
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#skills"
                               className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                                Tecnologias
                            </a>
                        </li>
                        <li>
                            <a href="#contact"
                               className="hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary transition-all duration-200 p-2">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={() => {
                        toggleTheme()
                        switchSound?.play()
                    }}
                    className="fixed bottom-4 right-4 p-2 rounded-lg hover:bg-foreground-primary hover:text-primary-blue focus:text-primary-blue dark:focus:text-font-primary dark:hover:text-font-primary">
                    <motion.span
                        key={resolvedTheme}
                        {...buttonToggleThemeRotateVariant}
                        className="block">
                        {resolvedTheme === 'dark' ? <SunMedium strokeWidth={1.7}/> : <Moon strokeWidth={1.5}/>}
                    </motion.span>
                    <span className="sr-only">Alterar tema</span>
                </button>
            </motion.div>)}
        </AnimatePresence>
    </>);
};

export default Menu;
