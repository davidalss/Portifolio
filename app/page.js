import Experience from "./_components/Experience"
import Header from "./_components/Header"
import Icons from "./_components/Icons"
import Portfolio from "./_components/Portfolio"
import WorkProcess from "./_components/WorkProcess"
import Hero from "./_components/Hero"
import ProjectIdea from "./_components/ProjectIdea"
import WhatIDo from "./_components/WhatIDo"
import Contact from "./_components/Contact"
import Footer from "./_components/Footer"
import SoftSkills from "./_components/WorkProcess"

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Icons />
            <Experience />
            <SoftSkills />
            <Portfolio />
            <ProjectIdea />
            <WhatIDo />
            <Contact />
            <Footer />
        </div>
    )
}

const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
