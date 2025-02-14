"use client"

import Image from "next/image";
import skills from "@/data/skills.json"
import {Tooltip} from "react-tooltip";

export default function SkillsSection() {

    return (
        <section className="max-w-6xl mx-auto px-6 text-center pt-16 pb-10" id="skills">
            <h3 className="text-4xl text-white font-inter font-bold mb-14">Tecnologias utilizadas</h3>

            <div className="space-y-12">
                <div>
                    <p className="mb-4">Techs que uso no meu dia a dia</p>
                    <ul className="flex gap-3 flex-wrap justify-center">
                        {skills.mostUsed.map((skill, index) => (
                            <li key={index}>
                                <Image data-tooltip-id={`skill-${skill.name}-tooltip`} data-tooltip-content={skill.name} width={64}
                                       height={0} src={skill.iconPath} alt={`Icone do ${skill.name}`}
                                       className="w-16 md:w-20 h-auto skill-icon"/>

                                <Tooltip
                                    id={`skill-${skill.name}-tooltip`}
                                    style={{
                                        backgroundColor: "var(--tooltip-bg)",
                                        color: "var(--tooltip-text-color)",
                                        padding: "5px 10px",
                                        opacity: 1,
                                        backdropFilter: "none",
                                        zIndex: 9999
                                    }}
                                    place="bottom"
                                    noArrow={true}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-4">Outras techs que já utilizei</p>
                    <ul className="flex gap-3 flex-wrap justify-center">
                        {skills.alreadyUsed.map((skill, index) => (
                            <li key={index}>
                                <Image data-tooltip-id={`skill-${skill.name}-tooltip`} data-tooltip-content={skill.name} width={64}
                                       height={0} src={skill.iconPath} alt={`Icone do ${skill.name}`}
                                       className="w-16 md:w-20 h-auto skill-icon"/>

                                <Tooltip
                                    id={`skill-${skill.name}-tooltip`}
                                    style={{
                                        backgroundColor: "var(--tooltip-bg)",
                                        color: "var(--tooltip-text-color)",
                                        padding: "5px 10px",
                                        opacity: 1,
                                        backdropFilter: "none",
                                        zIndex: 9999
                                    }}
                                    place="bottom"
                                    noArrow={true}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>)
}