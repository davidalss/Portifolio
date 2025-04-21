'use client';
import { client } from '@/sanity/client';
import React, { useEffect, useState } from 'react';
import createImageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Card = ({ img, category, title, text, url }) => (
    <div className="rounded-lg overflow-hidden text-left hover:shadow-card border border-section-secondary transition">
        <Image
            src={img}
            alt={title}
            width={424}
            height={248}
            className="shadow-md w-full"
        />
        <div className="p-8 xl:h-auto min-h-[258px]">
            <p className="text-xs text-text-secondary">{category}</p>
            <p className="text-lg mb-3 text-text-primary">{title}</p>
            <p className=" mb-5 text-text-secondary">{text}</p>
            <a
                className="group relative inline-flex items-center md:justify-start justify-center overflow-hidden rounded md:w-fit w-full border border-current px-8 py-3 text-primary focus:outline-hidden"
                href={url}
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
                        Estudo de caso
                </span>
            </a>
        </div>
    </div>
);

const options = { next: { revalidate: 30 } };

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const builder = createImageUrlBuilder(client);

    const fetch = async (all = false) => {
        setLoading(true);
        try {
            const POSTS_QUERY = `*[_type=="project"]{projectname, category, link, poster, description} | order(_createdAt desc) ${all ? "" : "[0...6]"}`;
            const projects = await client.fetch(POSTS_QUERY, {}, options);
            setProjects(projects);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch(showAll);
    }, [showAll]);

    const urlFor = (source) => builder.image(source);

    const toggleShowAll = () => setShowAll(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="portfolio"
            className="container mx-auto text-center py-20 px-section"
        >
            <h2 className="xl:text-5xl font-semibold md:text-3xl text-2xl xl:leading-[56px] mb-6">
                Portfolio
            </h2>
            <p className="text-text-secondary text-lg md:mb-16 mb-6 max-w-[650px] mx-auto">
                    Adoro criar coisas e estou sempre trabalhando em algo
                    Novo! Você pode ver alguns dos meus projetos favoritos abaixo.
            </p>
            <div className="xl:grid hidden grid-cols-3 gap-6">
                {loading ? <p>Carregando...</p> : error ? <p>Erro ao carregar os projetos</p> : projects.map((project, index) => (
                    <div key={index}>
                        <Card
                            img={urlFor(project.poster.asset._ref).url()}
                            category={project.category}
                            title={project.projectname}
                            text={project.description}
                            url={project.url}
                        />
                    </div>
                ))}
            </div>
            <div className="xl:hidden w-full">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div className="p-2" key={index}>
                            <Card
                                img={urlFor(project.poster.asset._ref).url()}
                                category={project.category}
                                title={project.projectname}
                                text={project.description}
                                url={project.url}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <button
                onClick={toggleShowAll}
                disabled={showAll}
                aria-label="Mostrar mais projetos"
                className="mt-12 md:inline-block rounded bg-primary px-8 py-3 tracking-wider font-medium text-white transition enabled:hover:scale-110 disabled:bg-primary/60 hover:shadow-xl outline-hidden enabled:cursor-pointer hidden"
            >
                Mais Projetos
            </button>
        </motion.div>
    );
};

export default Portfolio;
