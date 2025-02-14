import Image from "next/image";
import skills from "@/data/skills.json"

export default function SkillsSection() {

       return (
        <section className="max-w-6xl mx-auto px-6 text-center pt-16 pb-10" id="#skills">
            <h3 className="text-4xl text-white font-inter font-bold mb-14">Tecnologias utilizadas</h3>

            <div className="space-y-12">
                <div>
                    <p className="mb-4">Techs que uso no meu dia a dia</p>
                    <ul className="flex gap-3 flex-wrap justify-center">
                        {skills.mostUsed.map((skill, index) => (
                            <li key={index}>
                                <Image width={64} height={0} src={skill.iconPath} alt={`Icone do ${skill.name}`}
                                       className="w-16 md:w-20 h-auto skill-icon"/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-4">Outras techs que já utilizei</p>
                    <ul className="flex gap-3 flex-wrap justify-center">
                        {skills.alreadyUsed.map((skill, index) => (
                            <li key={index}>
                                <Image width={64} height={0} src={skill.iconPath} alt={`Icone do ${skill.name}`}
                                       className="w-16 md:w-20 h-auto skill-icon"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>)
}