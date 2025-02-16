"use client"

import Image from "next/image";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import AndroidEmail from "@/assets/elements/email-android.svg";
import {InstagramIcon, Mail} from "lucide-react";
import {Tooltip} from "react-tooltip";
import {motion} from "framer-motion";
import {fadeInLeft, fadeInRight} from "@/animations/scrollAnimations";
import TopWave from "@/assets/elements/TopWave";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";

export default function FooterSection() {
    return (
        <footer>
            <TopWave className="fill-foreground-primary pointer-events-none select-none"/>

            <div className="bg-foreground-primary pt-6">
                <div
                    className="max-w-6xl mx-auto px-6 pb-10 flex flex-col-reverse md:flex-1 md:flex-row items-center justify-center md:gap-8 xl:gap-44 scroll-p-80"
                    id="contact">
                    <motion.form {...fadeInLeft(20, 0.3, 1)} className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
                        <h3 className="text-4xl text-font-primary font-inter font-bold mb-6">Entre em contato
                            comigo</h3>
                        <div className="space-y-4">
                            <Input label="Nome" placeholder="John Doe" name="name"/>
                            <Input label="E-mail" name="email" placeholder="johndoe@exemplo.com"
                                   maxLength={100}/>
                            <TextArea label="Mensagem" name="message"
                                      placeholder="Olá, gostaria de falar sobre..." maxLength={300}/>
                            <Button className="w-full">Enviar</Button>
                        </div>
                    </motion.form>
                    <motion.div {...fadeInRight(20, 0.3, 1)} className="flex md:flex flex-col items-center">
                        <Image src={AndroidEmail}
                               alt="Imagem de envelopes que representam um e-mail com o tema, cores, e o icone do android."
                               className="w-auto hover:animate-gelatine cursor-pointer"/>
                        <a data-tooltip-id="open-email-tooltip" data-tooltip-content="Enviar e-mail"
                           href="mailto:contato@luizleal.dev" target="_blank"
                           className="hidden md:flex gap-2 transition-all duration-200 hover:text-primary-blue dark:hover:text-font-primary">
                            <Mail strokeWidth={1.5} className="w-5"/>
                            contato@luizleal.dev
                        </a>

                        <Tooltip
                            id="open-email-tooltip"
                            style={{
                                backgroundColor: "var(--tooltip-bg)",
                                color: "var(--tooltip-text-color)",
                                padding: "5px 10px",
                                borderRadius: "6px"
                            }}
                            delayShow={500}
                            place="bottom"
                        />
                    </motion.div>
                </div>
                <div className="h-px w-full bg-foreground-secondary"></div>
                <div className="max-w-6xl mx-auto p-6 flex gap-4 max-[400px]:items-center max-[400px]:flex-col justify-between">
                    <p>
                        <span className="font-inter"> &#169; </span>
                        Luiz André Leal · 2025
                    </p>
                    <div className="flex gap-2 fill-font-color">
                        <a data-tooltip-id="footer-socialmedia-link-tooltip"
                           data-tooltip-content="Github"
                           href="https://github.com/luizlealdev"
                           target="_blank">
                            <GithubIcon
                                className="hover:animate-gelatine fill-font-color hover:fill-primary-blue dark:hover:fill-font-primary w-6"/>
                        </a>
                        <a data-tooltip-id="footer-socialmedia-link-tooltip"
                           data-tooltip-content="Instagram"
                           href="https://github.com/luizlealdev" target="_blank" className="hover:animate-gelatine">
                            <InstagramIcon className="hover:text-primary-blue dark:hover:text-font-primary w-5"/>
                        </a>
                        <a data-tooltip-id="footer-socialmedia-link-tooltip"
                           data-tooltip-content="LinkedIn"
                           href="https://github.com/luizlealdev" target="_blank">
                            <LinkedInIcon className="hover:animate-gelatine fill-font-color hover:fill-primary-blue dark:hover:fill-font-primary w-6"/>
                        </a>

                        <Tooltip
                            id="footer-socialmedia-link-tooltip"
                            style={{
                                backgroundColor: "var(--tooltip-bg)",
                                color: "var(--tooltip-text-color)",
                                padding: "5px 10px",
                                borderRadius: "6px"
                            }}
                            delayShow={300}
                            place="top"
                        />
                    </div>
                </div>
            </div>
        </footer>)
}