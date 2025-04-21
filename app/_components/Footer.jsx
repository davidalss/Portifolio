"use client"
import Image from "next/image"
import React from "react"
import logo from "@/public/footerLogo.svg"
import { sections } from "./Header"
import { FaRegCopyright } from "react-icons/fa"
import clsx from "clsx" // Usado para classes condicionais (instalar clsx se não tiver)

const Footer = () => {
    return (
        <footer className="px-section bg-text-primary lg:py-20 py-10">
            <div className="container mx-auto mt-20">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between mb-10">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <Image
                            src={logo.src}
                            alt="Logo"
                            width={56}
                            height={56}
                            className="w-14 h-auto"
                        />
                        <p className="xl:text-4xl lg:text-3xl text-2xl text-white">
                            Thank You
                        </p>
                    </a>
                    {/* Navigation */}
                    <nav>
                        <ul className="grid lg:grid-cols-7 grid-cols-2 lg:gap-0 gap-8 items-center text-xl leading-6 text-white">
                            {sections.map((section, index) => (
                                <li
                                    key={index} // Usando o índice aqui para garantir que a chave seja única
                                    className={clsx(
                                        index === 6 && "lg:col-span-1 col-span-2",
                                        "mx-auto hover:text-primary transition"
                                    )}
                                >
                                    <a
                                        href={"#" + section.toLocaleLowerCase()}
                                        className="p-3"
                                        aria-label={`Ir para seção ${section}`} // Melhorando a acessibilidade
                                    >
                                        {section}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Copyright */}
                    <p className="text-white">
                        Copyright <FaRegCopyright className="inline" /> 2025.
                    </p>
                </div>
                {/* Desenvolvedor */}
                <p className="text-center text-white">
                    Desenvolvido por{" "}
                    <a href="mailto:davidalss041@gmail.com" className="underline" aria-label="Entrar em contato com David Alisson">
                        David Alisson
                    </a>{" "}
                    !
                </p>
            </div>
        </footer>
    )
}

export default Footer