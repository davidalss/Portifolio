'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const ProjectIdea = () => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-text-primary md:py-24 py-8 px-section"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-white xl:text-5xl font-semibold md:text-3xl text-2xl">
                    Você teve uma ideia de Projeto?
                    <br /> Vamos discurtir sobre!
                </h2>
                <p className="text-[#a5acb5] text-lg md:my-8 my-6">
                    Existem várias variações de passagens de Lorem Ipsum
                    <br /> disponíveis, mas a maioria sofreu alteração.
                </p>
                <Link
                    href="#contact"
                    className="group relative inline-flex items-center overflow-hidden md:w-auto w-full justify-center rounded bg-primary px-8 py-3 text-white outline-hidden"
                    aria-label="Ir para a seção de contato"
                >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>

                    <span className="text-sm font-semibold transition-all group-hover:me-4">
                        Vamos trabalhar juntos!
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectIdea;
