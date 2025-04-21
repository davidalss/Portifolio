"use client";
import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { TbSend2 } from "react-icons/tb";
import { client } from "@/sanity/client";
import { motion } from "framer-motion";

export const socials = [
    {
        link: "https://github.com/davidalss",
        icon: <i className="public\icons\github.png"></i>, // Substitua pelo ícone correto
    },
    {
        link: "https://linkedin.com",
        icon: <i className="public\socials\Social-3.svg"></i>, // Substitua pelo ícone correto
    },
]

const contacts = [
    {
        icon: (
            <HiOutlineLocationMarker className="rounded transition size-12 p-3 text-primary bg-biege/40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Endereço",
        link: "Brasil, Curitiba, PR",
        href: "https://www.google.com/maps/place/Curitiba,+PR/@-25.4950245,-49.4546066,11z/data=!3m1!4b1!4m6!3m5!1s0x94dce35351cdb3dd:0x6d2f6ba5bacbe809!8m2!3d-25.4268985!4d-49.2651984!16zL20vMDI4bXBy?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
    },
    {
        icon: (
            <HiOutlineMail className="rounded transition size-12 p-3 text-primary bg-biege/40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Meu Email:",
        link: "davidalss041@gmail.com",
        href: "mailto:davidalss041@gmail.com",
    },
    {
        icon: (
            <IoCallOutline className="rounded transition size-12 p-3 text-primary bg-biege/40 group-hover:text-white group-hover:bg-primary" />
        ),
        title: "Meu Contato:",
        link: "+55 (41) 00000-0000",
        href: "tel:+554100000-0000",
    },
]

const Card = ({ title, link, icon, href }) => (
    <a
        href={href}
        className="group rounded-[10px] flex gap-3 w-full sm:p-6 px-2 py-4 hover:shadow-[0px_12px_64px_0px_#1c19191f] transition-all overflow-hidden"
    >
        {icon}
        <div className="max-w-[calc(100%-60px)]">
            <p className="text-text-secondary text-sm mb-1">{title}</p>
            <p className="text-text-primary font-bold overflow-hidden text-ellipsis md:text-base text-sm">
                {link}
            </p>
        </div>
    </a>
)

const Contact = () => {
    const createContactEntry = async (data, e) => {
        try {
            const result = await client.create(data)
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            _type: "contact",
            name: e.target[0].value,
            email: e.target[1].value,
            phoneNumber: e.target[2].value,
            subject: e.target[3].value,
            message: e.target[4].value,
        }
        createContactEntry(data, e)
    }

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="contact"
            className="bg-white px-section"
        >
            <div className="bg-white container mx-auto  rounded-2xl relative top-20 xl:p-[88px] lg:p-14 md:p-10 p-2 flex lg:flex-row flex-col items-center justify-between shadow-[0px_59px_124px_0px_#0000001f]">
                {/* left-side */}
                <div className="lg:max-w-[40%]">
                <h3 className="lg:text-4xl font-semibold md:text-3xl text-2xl mb-4 text-text-primary">
                        Vamos discutir seu projeto
                    </h3>
                    <p className="text-lg text-text-secondary mb-4 lg:mb-9">
                        Aqui estão algumas maneiras de entrar em contato comigo.
                    </p>
                    {/* contacts */}
                    <div className="flex flex-col gap-3 xl:mb-9 lg:mb-6 mb-4">
                        {(contacts || []).map((item) => (
                            <div key={item.title}>
                                <Card
                                    href={item.href}
                                    icon={item.icon}
                                    link={item.link}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                    {/* socials */}
                    <div className="flex gap-3 bg-white w-fit mx-auto lg:mb-0 mb-10">
                        {(socials || []).map((item) => (
                            <a
                                key={item.link}
                                target="_blank"
                                href={item.link}
                                className="size-12 rounded shadow-card transition-all text-primary bg-white hover:bg-primary hover:text-white text-center flex items-center justify-center "
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                {/* form */}
                <div className="lg:max-w-[50%]">
                    <p className="text-text-secondary text-lg lg:text-left text-center lg:mb-12 mb-8">
                    Insira aqui suas informações e entrarei em contato o mais breve possível.
                    </p>
                    <form
                        action="#"
                        className="space-y-4 text-lg text-text-secondary"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            required
                            className="w-full p-3 border-b-2 border-[#e6e8eb] focus:outline-none focus:border-[#a35c6a]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full p-3 border-b-2 border-[#e6e8eb] focus:outline-none focus:border-[#a35c6a]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Celular"
                                className="w-full p-3 border-b-2 border-[#e6e8eb] focus:outline-none focus:border-[#a35c6a]"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Assunto"
                            required
                            className="w-full p-3 border-b-2 border-[#e6e8eb] focus:outline-none focus:border-[#a35c6a]"
                        />
                        <textarea
                            name="message"
                            placeholder="Mensagem"
                            required
                            rows={3}
                            className="w-full p-3 border-b-2 border-[#e6e8eb] focus:outline-none focus:border-[#a35c6a]"
                        />
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="group relative md:w-auto w-full inline-flex justify-center items-center overflow-hidden rounded bg-primary px-6 py-3 text-white"
                            >
                                <span className="absolute -end-full transition-all group-hover:end-4 mb-1">
                                    <TbSend2 />
                                </span>
                                <span className="text-sm font-medium transition-all group-hover:me-4">
                                    Enviar
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact