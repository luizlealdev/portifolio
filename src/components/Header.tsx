import Image from "next/image";

import AndroidIcon from "@/assets/elements/android-logo.svg";
import { SunMedium } from "lucide-react";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-2 px-6 h-16 bg-background">
            <a href="#">
                <Image
                    src={AndroidIcon}
                    width={0}
                    height={0}
                    className="w-auto h-auto p-2"
                    alt="Android Logo"
                />
            </a>
            <div className="flex">
                <nav className="flex items-center">
                    <ul className="flex gap-8">
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
                <button className="ml-14 p-2 rounded-lg hover:bg-foreground transition-all ease-in-out duration-350">
                    <SunMedium />
                    <span className="sr-only">Alterar tema</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
