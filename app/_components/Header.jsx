'use client';
import React, { useEffect, useState } from "react";
import logo from '@/public/headerLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

export const sections = [
    'Pagina Inicial',
    'Sobre',
    'Processo',
    'Portfolio',
    'Serviços',
    'Contato',
];

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    let lastScrollPosition = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > lastScrollPosition) {
                setIsScrollingUp(false);
            } else {
                setIsScrollingUp(true);
            }
            lastScrollPosition = currentScrollPosition;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Ajustado
        };
    }, []);

    const onToggleMenu = () => setToggleMenu((prev) => !prev);

    return (
        <header
            className={`${
                isScrollingUp ? 'translate-y-0' : '-translate-y-full'
            } px-section bg-white md:shadow sticky top-0 z-50 transition-all`}
        >
            <div className="container mx-auto flex py-5 items-center justify-between">
                <a href="/" className="md:flex hidden items-center gap-3">
                    <Image
                        src={logo.src}
                        alt="logo"
                        width={56}
                        height={56}
                        className="w-14 h-auto"
                    />
                    <p className="xl:text-4xl lg:text-3xl text-2xl">Portfolio</p>
                </a>
                <GiHamburgerMenu
                    className="cursor-pointer md:hidden block"
                    onClick={onToggleMenu}
                />
                <nav
                    className={`${
                        toggleMenu ? '' : 'md:translate-x-0 -translate-x-full'
                    } left-0 md:inset-0 md:shadow-none shadow-double transition-transform md:h-auto h-screen md:p-0 p-4 py-2.5 z-10 block md:relative absolute top-0 bg-biege md:bg-white `}
                >
                    <ul className="flex md:flex-row flex-col md:gap-0 gap-4 items-center text-sm">
                        <li className="md:hidden flex items-center justify-evenly gap-8">
                            <div className="md:hidden flex items-center gap-3 ">
                                <Image
                                    src={logo.src}
                                    alt="logo"
                                    width={56}
                                    height={56}
                                    className="w-10 h-auto"
                                />
                                <p className="text-xl">Bem Vindo ao meu Portfolio</p>
                            </div>
                            <button
                                className="text-3xl font-bold cursor-pointer"
                                onClick={onToggleMenu}
                            >
                                x
                            </button>
                        </li>
                        {sections.map((section) => (
                            <li key={section} onClick={onToggleMenu}>
                                <Link
                                    href={'#' + section.toLocaleLowerCase()}
                                    className="hover:bg-primary hover:text-white hover:shadow-double rounded xl:px-6 lg:px-4 px-2.5 py-3 text-[#333] transition xl:text-xl lg:text-lg text-base leading-6"
                                >
                                    {section}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
