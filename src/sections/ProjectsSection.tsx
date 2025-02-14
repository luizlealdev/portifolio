import projects from '@/data/projects.json';
import {Folder, SquareArrowOutUpRight} from "lucide-react";
import {GithubIcon} from "@/assets/icons/GitHubIcon";

export default function ProjectsSection() {
    return (
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10" id="#projects">
            <h3 className="text-4xl text-white font-inter font-bold text-center mb-14">Projetos em destaque</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} data={project}/>
                ))}
            </div>
        </section>)
}

const ProjectCard = (project) => {
    const data = project.data;

    return (
        <article
            className="bg-foreground-primary p-6 shadow-md rounded-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-between">
                <span className="flex gap-1">
                <Folder strokeWidth={1.6} className="w-5 text-white"/>/{data.type.toLowerCase()}
                </span>
                <div className="flex gap-3">
                    {data.githubUrl &&
                        <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
                            <GithubIcon
                                className="w-5 transition-all duration-200 ease-in-out fill-white/80 hover:fill-white hover:scale-110"/>
                        </a>}
                    {data.previewUrl &&
                        <a href={data.previewUrl} target="_blank" rel="noopener noreferrer">
                            <SquareArrowOutUpRight strokeWidth={1.7}
                                                   className="w-5 transition-all duration-200 ease-in-out  hover:text-white hover:scale-110"/>
                        </a>}
                </div>
            </div>
            <div className="mt-4 space-y-1">
                <h4 className="text-2xl font-inter font-semibold text-white">{data.name}</h4>
                <p>{data.description}</p>
            </div>
            <div className="flex gap-2 flex-wrap text-sm text-primary-blue mt-3">
                {data.stack.map((stack, index) => (
                    <span className="py-1 px-3 bg-[#4285F4]/10 rounded-full" key={index}>{stack}</span>
                ))}
            </div>
        </article>)
}