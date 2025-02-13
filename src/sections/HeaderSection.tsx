import Button from "@/components/Button";
import {FileDown} from "lucide-react";
import Image from "next/image";
import AndroidComponents from "@/assets/elements/android-architecture-components.svg";

export default function HeaderSection() {
    return (
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
        </section>)
}