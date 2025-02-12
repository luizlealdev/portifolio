import Header from "@/components/Header";

import AndroidComponents from "@/assets/elements/android-architecture-components.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { FileDown } from "lucide-react";

export default function Home() {
    return (
        <>
            <Header />
            <section className="max-w-6xl mx-auto flex gap-24 items-center px-6">
                <div className="space-y-3">
                    <p className="text-primary-green">Olá, me chamo</p>
                    <p className="font-inter font-bold text-white text-6xl">
                        Luiz Leal
                    </p>
                    <p>
                        Texto que ainda não sei o que vou colocar talvez uma
                        descrição sei lá, agora vou colocar um lorem ipsun dolor
                        sit amed.
                    </p>
                    <Button className="flex gap-1">
                        <FileDown strokeWidth={1.5}/>
                        Baixar currículo
                    </Button>
                </div>
                <Image
                    src={AndroidComponents}
                    width={0}
                    height={0}
                    alt="Imagem de um laptop com a logo e as cores do android."
                    className=""
                />
            </section>
        </>
    );
}
