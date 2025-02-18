"use client";

import { fadeInUp } from "@/animations/scrollAnimations";
import GithubIcon from "@/assets/icons/GithubIcon";
import { useSound } from "@/contexts/SoundContext";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";
import { Folder, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function ProjectsSection() {
    return (
        <section
            className="max-w-6xl mx-auto px-6 pt-16 pb-10 scroll-m-10"
            id="projects"
        >
            <motion.div
                {...fadeInUp(20, 0, 1, "all")}
                className="mb-14 text-center"
            >
                <h3 className="text-4xl text-font-primary font-inter font-bold">
                    Projetos em destaque
                </h3>
                <p className="mt-3">
                    Alguns projetos pessoais e acadêmicos que fiz para praticar
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} data={project} index={index} />
                ))}
            </div>
        </section>
    );
}

const ProjectCard = ({ data, index }) => {
    const [githubButtonAnimation, setGithubButtonAnimation] = useState(false);
    const [previewButtonAnimation, setPreviewButtonAnimation] = useState(false);

    const { slimeLandSound } = useSound();

    return (
        <motion.article
            {...fadeInUp(50, index * 0.2, 1, "some")}
            className="bg-background dark:bg-foreground-primary border border-foreground-primary p-6 shadow-md rounded-lg"
        >
            <div className="flex justify-between">
                <span className="flex gap-1">
                    <Folder
                        strokeWidth={1.6}
                        className="w-5 text-font-primary"
                    />
                    /{data.type.toLowerCase()}
                </span>
                <div className="flex gap-3">
                    {data.githubUrl && (
                        <a
                            onMouseEnter={() => {
                                slimeLandSound?.play();
                                setGithubButtonAnimation(true);
                            }}
                            onAnimationEnd={() =>
                                setGithubButtonAnimation(false)
                            }
                            data-tooltip-id="card-top-buttons-tooltip"
                            data-tooltip-content="Acessar repositório"
                            href={data.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon
                                className={`w-6 transition-all duration-200 ease-in-out fill-font-color hover:fill-primary-blue focus:fill-primary-blue dark:hover:fill-font-primary dark:focus:fill-font-primary ${
                                    githubButtonAnimation
                                        ? "animate-gelatine"
                                        : ""
                                }`}
                            />
                        </a>
                    )}
                    {data.previewUrl && (
                        <a
                            onMouseEnter={() => {
                                setPreviewButtonAnimation(true);
                                slimeLandSound?.play();
                            }}
                            onAnimationEnd={() =>
                                setPreviewButtonAnimation(false)
                            }
                            data-tooltip-id="card-top-buttons-tooltip"
                            data-tooltip-content="Acessar projeto"
                            href={data.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SquareArrowOutUpRight
                                strokeWidth={1.7}
                                className={`w-5 transition-all duration-200 ease-in-out hover:text-primary-blue focus:fill-primary-blue dark:hover:text-font-primary dark:focus:fill-font-primary ${
                                    previewButtonAnimation
                                        ? "animate-gelatine"
                                        : ""
                                }`}
                            />
                        </a>
                    )}

                    <Tooltip
                        id="card-top-buttons-tooltip"
                        style={{
                            backgroundColor: "var(--tooltip-bg)",
                            color: "var(--tooltip-text-color)",
                            padding: "5px 10px",
                            borderRadius: "6px",
                        }}
                        delayShow={400}
                        place="top"
                    />
                </div>
            </div>
            <div className="mt-4 space-y-1">
                <h4 className="text-2xl font-inter font-semibold text-font-primary">
                    {data.name}
                </h4>
                <p>{data.description}</p>
            </div>
            <div className="flex gap-2 flex-wrap text-sm text-primary-blue mt-3">
                {data.stack.map((stack, index) => (
                    <span
                        className="py-1 px-3 bg-[#4285F4]/10 rounded-full"
                        key={index}
                    >
                        {stack}
                    </span>
                ))}
            </div>
        </motion.article>
    );
};
