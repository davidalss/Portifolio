"use client"
import React, { useEffect, useState } from "react"
import github from "@/public/icons/github.png"
import js from "@/public/icons/javascript.png"
import jest from "@/public/icons/jest.png"
import material from "@/public/icons/material-ui.png"
import next from "@/public/icons/nextjs.png"
import RQ from "@/public/icons/react-query.png"
import redux from "@/public/icons/redux-logo.png"
import sanity from "@/public/icons/sanity.png"
import sass from "@/public/icons/sass.png"
import tailwind from "@/public/icons/tailwindcss.png"
import ts from "@/public/icons/typescript.png"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"

const icons = [
    github,
    js,
    jest,
    material,
    next,
    RQ,
    redux,
    sanity,
    sass,
    tailwind,
    ts,
]
const Icons = () => {
    const [speed, setSpeed] = useState(50)
    const [gap, setGap] = useState(32)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 767) {
                setSpeed(30)
                setGap(16)
            } else if (window.innerWidth < 1024) {
                setSpeed(40)
                setGap(24)
            } else {
                setSpeed(50)
                setGap(32)
            }
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-section flex gap-3.5 justify-center relative z-10 animate-section"
        >
            <div className="w-full">
                <Marquee speed={speed} gradient={false} pauseOnHover={false}>
                    {icons.map((icon) => (
                        <div key={icon.src} style={{ marginRight: `${gap}px` }}>
                            <Image
                                src={icon.src}
                                alt="icon"
                                width={70}
                                height={70}
                                className="md:h-[100px] h-[70px] w-auto"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </motion.div>
    )
}

export default Icons
