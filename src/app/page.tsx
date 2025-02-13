import Menu from "@/components/Menu";
import AboutSection from "@/sections/AboutSection";
import FooterSection from "@/sections/FooterSection";
import ProjectsSection from "@/sections/ProjectsSection";
import HeaderSection from "@/sections/HeaderSection";

export default function Home() {
    return (
        <>
            <Menu/>

            <HeaderSection />

            <AboutSection/>

            <ProjectsSection/>

            <FooterSection />
        </>
    );
};
