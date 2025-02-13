import Menu from "@/components/Menu";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import {FileDown, Mail} from "lucide-react";
import AboutSection from "@/components/sections/AboutSection";

import AndroidComponents from "@/assets/elements/android-architecture-components.svg";
import AndroidEmail from "@/assets/elements/email-android.svg"
import FooterTopWave from "@/assets/elements/footer_top_wave.svg"

export default function Home() {
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

            <AboutSection/>

            <section className="" id="#skills">

            </section>

            <footer>
                <Image src={FooterTopWave} alt="Wave" className="w-screen pointer-events-none select-none"/>

                <div className="bg-foreground-primary pt-6">
                    <div
                        className="max-w-6xl mx-auto px-6 pb-10 flex flex-col-reverse md:flex-1 md:flex-row items-center justify-center md:gap-8 xl:gap-44">
                        <form className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
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
                        </form>
                        <div className="flex md:flex flex-col items-center">
                            <Image src={AndroidEmail}
                                   alt="Imagem de envelopes que representam um e-mail com o tema, cores, e o icone do android."
                                   className="w-auto"/>
                            <a href="mailto:contato@luizleal.dev" target="_blank"
                               className="hidden md:flex gap-2 hover:text-white">
                                <Mail strokeWidth={1.5} className="w-5"/>
                                contato@luizleal.dev
                            </a>
                        </div>
                    </div>
                    <div className="h-px w-full bg-foreground-secondary"></div>
                    <div className="max-w-6xl mx-auto p-6">
                        <p className="">
                            <span className="font-inter">&#169; </span>
                            2025 - Luiz André Leal
                        </p>

                    </div>
                </div>
            </footer>
        </>
    );


};
