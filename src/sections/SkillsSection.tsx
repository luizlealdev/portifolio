"use client"

import Image from "next/image";
import skills from "@/data/skills.json";
import {Tooltip} from "react-tooltip";
import {motion} from "framer-motion";
import {fadeInUp, scaleIn, staggerChildren} from "@/animations/scrollAnimations";
import {useTheme} from "next-themes";

export default function SkillsSection() {
    const {resolvedTheme} = useTheme();

    return (
        <section className="max-w-6xl mx-auto px-6 text-center pt-16 pb-10 scroll-m-12" id="skills">
            <motion.h3
                {...fadeInUp(20, 0, 1, "all")}
                className="text-4xl text-font-primary font-inter font-bold mb-14">
                Tecnologias utilizadas
            </motion.h3>

            <div className="space-y-12">
                <div>
                    <motion.p
                        {...fadeInUp(20, 0, 1.2, "all")}
                        className="mb-4">Techs que uso no meu dia a dia
                    </motion.p>
                    <motion.ul {...staggerChildren(0, 0.8, 0.1)} className="flex gap-3 flex-wrap justify-center">
                        {skills.mostUsed.map((skill, index) => (
                            <motion.li
                                key={index}
                                {...scaleIn(index * 0.1, 0.8)}
                            >
                                <Image data-tooltip-id={`skill-${skill.name}-tooltip`}
                                       data-tooltip-content={skill.name}
                                       width={128}
                                       height={128}
                                       src={
                                           skill.iconPath.dark && resolvedTheme === "dark" ? skill.iconPath.dark : skill.iconPath.normal
                                       }
                                       alt={`Icone do ${skill.name}`}
                                       className="w-16 md:w-20 h-auto skill-icon drop-shadow-2xl"/>

                                <Tooltip
                                    id={`skill-${skill.name}-tooltip`}
                                    style={{
                                        backgroundColor: "var(--tooltip-bg)",
                                        color: "var(--tooltip-text-color)",
                                        padding: "5px 10px",
                                        opacity: 1,
                                        borderRadius: "6px",
                                        backdropFilter: "none",
                                        zIndex: 9999
                                    }}
                                    place="bottom"
                                    noArrow={true}
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <div>
                    <motion.p
                        {...fadeInUp(20, 0, 1.2, "all")}
                        className="mb-4">
                        Outras techs que já utilizei
                    </motion.p>
                    <motion.ul {...staggerChildren(0, 0.8, 0.1)} className="flex gap-3 flex-wrap justify-center">
                        {skills.alreadyUsed.map((skill, index) => (
                            <motion.li
                                key={index}
                                {...scaleIn(index * 0.1, 0.8)}>
                                <Image data-tooltip-id={`skill-${skill.name}-tooltip`}
                                       data-tooltip-content={skill.name}
                                       width={128}
                                       height={128}
                                       src={
                                           skill.iconPath.dark && resolvedTheme === "dark" ? skill.iconPath.dark : skill.iconPath.normal
                                       }
                                       alt={`Icone do ${skill.name}`}
                                       className="w-16 md:w-20 h-auto skill-icon"/>

                                <Tooltip
                                    id={`skill-${skill.name}-tooltip`}
                                    style={{
                                        backgroundColor: "var(--tooltip-bg)",
                                        color: "var(--tooltip-text-color)",
                                        padding: "5px 10px",
                                        opacity: 1,
                                        borderRadius: "6px",
                                        backdropFilter: "none",
                                        zIndex: 9999
                                    }}
                                    place="bottom"
                                    noArrow={true}
                                />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
