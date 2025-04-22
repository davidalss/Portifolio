'use client';
import React from 'react';
import Image from 'next/image';
import avatar from '/public/avatar.png';
import Counters from './Counters';
import { motion } from 'framer-motion';
import { FiDownload } from "react-icons/fi";

const Hero = () => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="animate-section container mx-auto flex lg:flex-row flex-col lg:gap-0 gap-4 items-center 2xl:justify-between md:pt-20 sm:pt-14 pt-10 pb-16 px-section overflow-hidden"
        >
            {/* Info Box */}
            <div className="2xl:max-w-[780px] lg:max-w-full w-auto lg:text-left text-center lg:mt-0 mt-4">
                <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl font-semibold xl:leading-[84px] text-text-primary xl:mb-6 mb-3">
                    Ola!, Eu sou
                    <br />
                    <div className="whitespace-nowrap relative w-fit lg:mx-0 mx-auto">
                        <p className="relative z-10">David Alisson</p>
                        <div className="absolute inset-0 -left-1 h-full bg-linear-[0deg,#f2ddb0_0%,#f2ddb0_50%,transparent_50%,transparent] animate-stretch"></div>
                    </div>
                </h1>
                <div className="text-text-secondary xl:text-2xl text-base xl:mb-6 mb-4">
                    Atualmente estudo
                    <div className="whitespace-nowrap relative w-fit lg:mx-0 mx-auto inline-block">
                        <p className="relative z-10">Analise e Desenvolvimento de Sistemas</p>
                        <div className="absolute inset-0 -left-1 h-full bg-linear-[0deg,#f2ddb0_0%,#f2ddb0_50%,transparent_50%,transparent] animate-stretch"></div>
                    </div>
                    estudando Full-Stack mas meu foco é me tornar um DEV 
                    <div className="whitespace-nowrap relative w-fit lg:mx-0 mx-auto inline-block">
                        <p className="relative z-10">Back-End. </p>
                        <div className="absolute inset-0 -left-1 h-full bg-linear-[0deg,#f2ddb0_0%,#f2ddb0_50%,transparent_50%,transparent] animate-stretch"></div>
                    </div>
                     Em constante aprendizado sobre ferramentas e práticas modernas de desenvolvimento, buscando aplicar boas práticas de código e me manter atualizado com as tendências e avanços da área para entregar soluções de qualidade.
                </div>
                <a
                    className="inline-block rounded-sm bg-primary lg:px-6 px-12 lg:py-3 py-4 sm:w-fit w-full xl:text-xl lg:text-lg tracking-wider font-medium text-white transition hover:scale-110 hover:shadow-xl outline-hidden lg:mb-16 mb-8"
                    href="#contact"
                >
                    Entrar em contato!
                </a>
                <Counters />
            </div>
            {/* Avatar Side */}
            <div className="relative">
                <Image
                    src={avatar.src}
                    alt="avatar"
                    width={520}
                    height={520}
                    className="2xl:size-[520px] lg:size-[440px] md:size-[420px] sm:size-[340px] size-[240px] absolute inset-0 z-10 left-2.5"
                />
                <div className="2xl:size-[540px] lg:size-[460px] md:size-[440px] sm:size-[360px] size-[260px] rounded-full bg-linear-[45deg,var(--color-primary)_0%,var(--color-primary)_60%,transparent_60%,transparent] flex items-center justify-center animate-rotate">
                    <div className="2xl:size-[520px] lg:size-[440px] md:size-[420px] sm:size-[340px] size-[240px] rounded-full bg-biege"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
