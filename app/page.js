import Experience from "./_components/Experience"
import Header from "./_components/Header"
import Icons from "./_components/Icons"
import Portfolio from "./_components/Portfolio"
import WorkProcess from "./_components/WorkProcess"
import Hero from "./_components/Hero"
import ProjectIdea from "./_components/ProjectIdea"
import Blog from "./_components/Blog"
import WhatIDo from "./_components/WhatIDo"
import Contact from "./_components/Contact"
import Footer from "./_components/Footer"

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Icons />
            <Experience />
            <WorkProcess />
            <Portfolio />
            <ProjectIdea />
            <Blog />
            <WhatIDo />
            <Contact />
            <Footer />
        </div>
    )
}