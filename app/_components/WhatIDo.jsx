"use client"
import React from "react"
import { motion } from "framer-motion"

const data = [
    {
        title: "Web FrontEnd Applications (Next.js & Angular)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
        title: "Web BackEnd Applications (Node.js)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
        title: "Web FullStack Applications",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
]

const Card = ({ title, text }) => (
    <div className="hover:border-l-[5px] hover:translate-x-4 transition-all bg-white border-l-primary rounded-md shadow-card p-8">
        <h3 className="text-text-primary mb-4 xl:text-2xl text-xl">{title}</h3>
        <p className="text-text-secondary">{text}</p>
    </div>
)
const WhatIDo = () => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="services"
            className="bg-section-secondary lg:py-20 py-10 px-section"
        >
            <div className="container mx-auto flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between">
                {/* left-side */}
                <div className="lg:max-w-[40%] lg:text-left text-center">
                    <h2 className="lg:text-5xl font-semibold md:text-3xl text-2xl text-[#333] lg:mb-6 mb-4">
                        What I Do?
                    </h2>
                    <p className="text-text-secondary text-lg mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores blanditiis quasi accusantium facere eveniet,
                        soluta voluptatem magnam, dignissimos, ullam explicabo
                        exercitationem totam.
                    </p>
                    <p className="text-text-secondary text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        explicabo exercitationem totam.
                    </p>
                    <a
                        className="lg:mt-12 mt-4 inline-block rounded md:w-auto w-full bg-primary px-6 py-3 lg:text-lg tracking-wider font-medium text-white transition hover:scale-110 hover:shadow-xl outline-hidden"
                        href="#contact"
                    >
                        Say Hello!
                    </a>
                </div>
                <div className="flex flex-col lg:gap-6 gap-4 lg:max-w-[50%]">
                    {data.map((item) => (
                        <div key={item.title}>
                            <Card title={item.title} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default WhatIDo
