import Menu from "@/components/Menu";
import AboutSection from "@/sections/AboutSection";
import FooterSection from "@/sections/FooterSection";
import ProjectsSection from "@/sections/ProjectsSection";
import HeaderSection from "@/sections/HeaderSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
    return (
        <>
            <Menu/>

            <HeaderSection />

            <AboutSection/>

            <ProjectsSection/>

            <SkillsSection/>

            <FooterSection />
        </>
    );
};