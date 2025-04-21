"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Counters from "./Counters";

// Front-end
import html from "/public/icons/html.png";
import css from "/public/icons/css.png";
import js from "/public/icons/javascript.png";
import ts from "/public/icons/typescript.png";
import next from "/public/icons/nextjs.png";
import tailwind from "/public/icons/tailwindcss.png";

// Back-end
import node from "/public/icons/nodejs.png";
import mongo from "/public/icons/mongodb.png";
import postgres from "/public/icons/postgresql.png";
import csharp from "/public/icons/csharp.png";

// Versionamento e ferramentas
import git from "/public/icons/git.png";
import github from "/public/icons/github.png";

const frontIcons = [html, css, js, ts, next, tailwind];
const backIcons = [node, mongo, postgres, csharp];
const toolsIcons = [git, github];

const Icons = () => {
    const [speed, setSpeed] = useState(50);
    const [gap, setGap] = useState(32);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 767) {
                setSpeed(30);
                setGap(16);
            } else if (window.innerWidth < 1024) {
                setSpeed(40);
                setGap(24);
            } else {
                setSpeed(50);
                setGap(32);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderIcons = (title, icons) => (
        <div className="mb-8">
            <h3 className="text-center text-xl font-semibold text-text-primary mb-4">{title}</h3>
            <Marquee speed={speed} gradient={false}>
                {icons.map((icon, index) => (
                    <div key={index} style={{ marginRight: `${gap}px` }}>
                        <Image
                            src={icon}
                            alt="icon"
                            width={60}
                            height={60}
                            className="md:h-[80px] h-[60px] w-auto"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-section py-10"
        >
            {renderIcons("Front-End", frontIcons)}
            {renderIcons("Back-End", backIcons)}
            {renderIcons("Ferramentas", toolsIcons)}
        </motion.div>
    );
};

export default Icons;