"use client"
import React from "react"
import { MdOutlineEventNote } from "react-icons/md"
import { FaChartBar, FaPencilAlt, FaLaptop } from "react-icons/fa"
import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"

const Card = ({ icon, title, text, index }) => (
    <div
        className={`${
            index % 2 === 1
                ? "md:hover:-translate-y-8 md:-translate-y-4"
                : "md:hover:-translate-y-4"
        }  group md:hover:shadow-[32px_32px_124px_0px_#2b384c1a] hover:shadow-lg rounded-xl bg-white xl:p-8 p-6  transition-all md:ml-0 ml-4 md:max-w-auto max-w-[350px]`}
    >
        {icon}
        <h3 className="text-xl mt-8 mb-3">{title}</h3>
        <p className="text-text-secondary leading-6">{text}</p>
    </div>
)

const boxes = [
    {
        icon: (
            <MdOutlineEventNote className="text-primary size-[72px] p-5 rounded-md bg-biege/40 group-hover:bg-primary group-hover:text-white transition-all" />
        ),
        title: "1. Research",
        text: "Gather insights to understand your goals and audience and requirements.",
    },
    {
        icon: (
            <FaChartBar className="text-primary size-[72px] p-5 rounded-md bg-biege/40 group-hover:bg-primary group-hover:text-white transition-all" />
        ),
        title: "2. Analyze",
        text: "Collected data, identify challenges, and create a clear roadmap.",
    },
    {
        icon: (
            <FaPencilAlt className="text-primary size-[72px] p-5 rounded-md bg-biege/40 group-hover:bg-primary group-hover:text-white transition-all" />
        ),
        title: "3. Design",
        text: "Create user-focused, visually appealing, and functional designs.",
    },
    {
        icon: (
            <MdOutlineEventNote className="text-primary size-[72px] p-5 rounded-md bg-biege/40 group-hover:bg-primary group-hover:text-white transition-all" />
        ),
        title: "4. Launch",
        text: "Deliver and deploy with precision, ensuring a seamless experience.",
    },
]
const WorkProcess = () => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="process"
            className="bg-section-secondary w-full lg:py-40 py-20 px-section"
        >
            <div className="container mx-auto bg-section-secondary flex lg:flex-row flex-col justify-between gap-8 items-center">
                {/* info-side */}
                <div className="lg:max-w-[40%] lg:text-left text-center">
                    <h2 className="lg:text-5xl font-semibold md:text-3xl text-2xl leading-[56px] lg:mb-6 mb-4">
                        Work Process
                    </h2>
                    <p className="xl:text-2xl text-lg mb-4 text-text-secondary">
                        Our streamlined process ensures efficiency and
                        excellence at every stage.
                    </p>
                    <p className="xl:text-2xl text-lg text-text-secondary">
                        We begin with in-depth research to understand your
                        goals, analyze data to craft a strategic plan, design
                        user-centric solutions that blend functionality with
                        aesthetics, and finally launch the project with
                        precision, ensuring a flawless experience.
                    </p>
                </div>
                {/* boxes-side */}
                <div className="md:grid hidden md:grid-cols-2 gap-6 xl:max-w-[50%]">
                    {boxes.map((box, index) => (
                        <React.Fragment key={box.title}>
                            <Card
                                icon={box.icon}
                                title={box.title}
                                text={box.text}
                                index={index}
                            />
                        </React.Fragment>
                    ))}
                </div>
                {/* boxes-slider */}
                <div className="md:hidden w-full max-w-full overflow-x-hidden">
                    <Marquee speed={30} delay={2}>
                        {boxes.map((box) => (
                            <React.Fragment key={box.title}>
                                <Card
                                    icon={box.icon}
                                    title={box.title}
                                    text={box.text}
                                />
                            </React.Fragment>
                        ))}
                    </Marquee>
                </div>
            </div>
        </motion.div>
    )
}

export default WorkProcess
