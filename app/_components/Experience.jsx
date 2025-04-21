'use client';

import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar2.png";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaGitlab } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/davidalss" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/davidalss/" },
    { icon: <FaGitlab />, link: "https://gitlab.com/davidalss" },
];

const SocialIcon = ({ icon, link }) => (
    <a href={link} className="xl:size-12 md:size-10 size-8 rounded text-primary bg-white transition hover:bg-primary hover:text-white text-center flex items-center justify-center">
        {icon}
    </a>
);

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

                {/* Image Section */}
                <div className="xl:w-[424px] lg:w-[380px] md:w-[330px] w-[270px] xl:h-[468px] lg:h-[400px] md:h-[350px] h-[290px] bg-section-secondary overflow-visible rounded-[10px] relative z-10">
                    <div className="absolute inset-0 bg-section-secondary rounded-[10px] z-10"></div>
                    <Image
                        src={avatar.src}
                        alt="avatar"
                        width={480}
                        height={483}
                        className="relative z-10 xl:w-[460px] xl:h-[463px] lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] h-[295px] rounded-[10px] mx-auto -translate-y-6"
                    />
                    <div className="absolute inset-0 bg-primary rounded-[10px] animate-shake z-0"></div>

                    {/* Social Links */}
                    <div className="flex mx-auto bg-white p-3 shadow-md w-fit relative rounded bottom-7 z-10">
                        {socialLinks.map((social, index) => (
                            <SocialIcon key={index} icon={social.icon} link={social.link} />
                        ))}
                    </div>
                </div>

                {/* Information Section */}
                <div className="max-w-[536px] lg:text-left text-center">
                    <h3 className="xl:text-[38px] font-semibold md:text-3xl text-2xl text-text-primary md:leading-[50px] md:mb-8 mb-4">
                        Atualmente sou Estudante de ADS, explorando o desenvolvimento Full Stack.
                    </h3>

                    <p className="text-lg text-text-secondary mb-4">
                        Estou direcionando meus estudos para:
                        <br />
                        • <strong>C# e Java:</strong> aprofundando sintaxe, princípios de orientação a objetos e boas práticas de desenvolvimento;
                        <br />
                        • <strong>APIs RESTful:</strong> criação de serviços escaláveis, seguros e bem documentados;
                        <br />
                        • <strong>Bancos de Dados SQL:</strong> modelagem relacional, otimização de queries e integridade dos dados;
                        <br />
                        • <strong>Boas Práticas e Arquitetura:</strong> foco em clean code, segurança, escalabilidade e desempenho.
                    </p>

                    <p className="text-lg text-text-secondary mb-4">
                        Estou em constante aprendizado sobre ferramentas e tecnologias modernas de desenvolvimento, com o objetivo de aplicar código limpo, eficiente e bem testado. Busco acompanhar as tendências e inovações da área para entregar soluções cada vez mais profissionais e alinhadas ao mercado.
                    </p>

                    <div className="flex md:flex-row flex-col justify-center lg:justify-start gap-4 ">
                        <Link
                            className="flex items-center justify-center rounded md:w-auto w-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl outline-hidden"
                            href="#portfolio"
                        >
                            Meus Projetos
                        </Link>
                        <a
                            className="flex items-center gap-3 md:w-auto w-full justify-center rounded border border-current px-6 py-3 text-sm font-medium text-primary transition hover:scale-110 hover:shadow-xl outline-hidden"
                            download="CurrículoTI.pdf"
                            href={"CurrículoTI.pdf"}
                        >
                            <FiDownload className="size-6" />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
