"use client"

import Image from "next/image";
import FooterTopWave from "@/assets/elements/footer_top_wave.svg";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import AndroidEmail from "@/assets/elements/email-android.svg";
import {Mail} from "lucide-react";
import {Tooltip} from "react-tooltip";
import {motion} from "framer-motion";
import {fadeInLeft, fadeInRight} from "@/animations/scrollAnimations";

export default function FooterSection() {
    return (
        <footer>
            <Image src={FooterTopWave} alt="Wave" className="w-screen pointer-events-none select-none"/>

            <div className="bg-foreground-primary pt-6">
                <div
                    className="max-w-6xl mx-auto px-6 pb-10 flex flex-col-reverse md:flex-1 md:flex-row items-center justify-center md:gap-8 xl:gap-44" id="contact">
                    <motion.form {...fadeInLeft(20, 0.3, 1)} className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
                        <h3 className="text-4xl text-white font-inter font-bold mb-6">Entre em contato
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
                               className="w-auto"/>
                        <a data-tooltip-id="open-email-tooltip" data-tooltip-content="Enviar e-mail" href="mailto:contato@luizleal.dev" target="_blank"
                           className="hidden md:flex gap-2 hover:text-white">
                            <Mail strokeWidth={1.5} className="w-5"/>
                            contato@luizleal.dev
                        </a>

                        <Tooltip
                            id="open-email-tooltip"
                            style={{
                                backgroundColor: "var(--tooltip-bg)",
                                color: "var(--tooltip-text-color)",
                                padding: "5px 10px"
                            }}
                            delayShow={300}
                            place="bottom"
                        />
                    </motion.div>
                </div>
                <div className="h-px w-full bg-foreground-secondary"></div>
                <div className="max-w-6xl mx-auto p-6">
                    <p className="">
                        <span className="font-inter"> &#169; </span>
                        Luiz André Leal · 2024
                    </p>

                </div>
            </div>
        </footer>)
}