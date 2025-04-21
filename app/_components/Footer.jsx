'use client';
import Image from 'next/image';
import React from 'react';
import logo from '/public/footerLogo.svg';
import { sections } from './Header';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-section bg-text-primary lg:py-20 py-10">
            <div className="container mx-auto mt-20">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between mb-10">
                    <a href="#" className="flex items-center gap-3">
                        <Image
                            src={logo.src}
                            alt="logo"
                            width={56}
                            height={56}
                            className="w-14 h-auto"
                        />
                        <p className="xl:text-4xl lg:text-3xl text-2xl text-white">
                            Obrigado pela Visita!
                        </p>
                    </a>
                    <nav>
                        <ul className="grid lg:grid-cols-7 grid-cols-2 lg:gap-0 gap-8 items-center text-xl leading-6 text-white">
                            {sections.map((section, index) => (
                                <li
                                    key={section}
                                    className={`${
                                        index === 6
                                            ? 'lg:col-span-1 col-span-2'
                                            : ''
                                    } mx-auto hover:text-primary transition`}
                                >
                                    <a
                                        href={'#' + section.toLocaleLowerCase()}
                                        className="p-3"
                                    >
                                        {section}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Copyright section */}
                <div className="flex items-center justify-between text-white">
                    <p className="flex items-center gap-2 text-lg">
                        <FaRegCopyright className="inline" /> 2025. Todos os direitos reservados.
                    </p>
                    <p className="text-lg text-center">
                        Desenvolvido por{' '}
                        <a
                            href="mailto:davidalss041@gmail.com"
                            className="underline"
                        >
                            David Alisson
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;