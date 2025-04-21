"use client"
import Image from "next/image"
import React from "react"
import avatar from "@/public/avatar2.png"
import { FaFacebookF } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGitlab } from "react-icons/fa"
import { FiDownload } from "react-icons/fi"
import Link from "next/link"
import { motion } from "framer-motion"

export const socials = [
    {
        icon: <FaGithub className="text-lg" />,
        link: "https://github.com/davidalss",
    },
    {
        icon: <FaInstagram className="text-lg" />,
        link: "https://www.instagram.com/david.alss/",
    },
    {
        icon: <FaLinkedin className="text-lg" />,
        link: "https://www.linkedin.com/in/davidalss/",
    },
    {
        icon: <FaGitlab className="text-lg" />,
        link: "https://gitlab.com/davidalss",
    },
]
const Experience = () => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="about"
            className="px-section"
        >
            <div className="container mx-auto shadow-experience-double relative lg:top-20 top-10 flex lg:flex-row flex-col justify-between items-center 2xl:gap-32 xl:gap-24 md:gap-10 gap-16 xl:px-28 lg:px-12 px-4 lg:py-20 py-8 rounded-2xl bg-white ">
                {/* image-side */}
                <div className="xl:w-[424px] lg:w-[380px] md:w-[330px] w-[270px] xl:h-[468px] lg:h-[400px] md:h-[350px] h-[290px] bg-section-secondary overflow-visible rounded-[10px] relative z-10">
                    <div className="size-full bg-section-secondary overflow-visible rounded-[10px] absolute inset-0 z-10"></div>
                    <Image
                        src={avatar.src}
                        alt="avatar"
                        width={480}
                        height={483}
                        className="relative z-10 xl:w-[460px] xl:h-[463px] lg:size-[400px] md:size-[350px] h-[295px] max-w-max rounded-[10px] left-1/2 -translate-x-1/2 -translate-y-6"
                    />
                    <div className="absolute inset-0 size-[calc(100%+10px)] rounded-[10px] bg-primary z-0 animate-shake"></div>
                    {/* socials */}
                    <div className="flex mx-auto bg-white p-3 shadow-md w-fit relative rounded bottom-7 z-10">
                        {socials.map((social) => (
                            <a
                                href={social.link}
                                key={social.link}
                                className="xl:size-12 md:size-10 size-8 rounded text-primary bg-white transition hover:bg-primary hover:text-white text-center flex items-center justify-center"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                {/* info-side */}
                <div className="max-w-[536px] lg:text-left text-center">
                    <h3 className="xl:text-[38px] font-semibold md:text-3xl text-2xl text-text-primary md:leading-[50px] md:mb-8 mb-4">
                        I'm Professional FrontEnd Developer
                    </h3>
                    <p className="text-lg text-text-secondary mb-4">
                        Demonstrated ability to self-manage during independent
                        projects and thrive in collaborative team environments.
                        Committed to delivering exceptional code quality and
                        staying updated with industry trends and advancements.
                    </p>
                    <p className="text-lg text-text-secondary mb-4">
                        Experienced Frontend Developer with nearly 2 years of
                        experience in Next.js development. Proficient in
                        utilizing cutting-edge development tools and procedures
                        to deliver high-quality results
                    </p>
                    <div className="flex md:flex-row flex-col justify-center lg:justify-start gap-4 ">
                        <Link
                            className="flex items-center justify-center rounded md:w-auto w-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl outline-hidden"
                            href="#portfolio"
                        >
                            Meus Projetos
                        </Link>
                        <a
                            className="flex items-center gap-3 md:w-auto w-full justify-center rounded  border border-current px-6 py-3 text-sm font-medium text-primary transition hover:scale-110 hover:shadow-xl outline-hidden"
                            download="Abdalmoamen Abbara.pdf"
                            href={"Abdalmoamen Abbara.pdf"}
                        >
                            <FiDownload className="size-6" />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience
