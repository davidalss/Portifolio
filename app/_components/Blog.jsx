"use client"
import { client } from "@/sanity/client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import createImageUrlBuilder from "@sanity/image-url"
import { motion } from "framer-motion"

const POSTS_QUERY = `*[_type=="blog"]{poster,date,blogName,link, description}`
const options = { next: { revalidate: 30 } }

export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('pt-BR', options)
}

const Card = ({ img, date, title, url, description }) => (
    <Link
        href={url}
        className="rounded-lg blog overflow-hidden text-left shadow-card h-full border block border-section-secondary"
    >
        <Image
            src={img}
            alt={title}
            width={424}
            height={248}
            className="shadow-md w-full"
        />
        <div className="p-6">
            <p className="text-sm text-text-secondary mb-2">{date}</p>
            <p className="text-lg text-[#333] line-clamp-2">{title}</p>
            <p className="text-sm text-text-secondary line-clamp-3 mt-2">{description}</p>
        </div>
    </Link>
)

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const builder = createImageUrlBuilder(client)
    const fetch = async () => {
        const blogs = await client.fetch(POSTS_QUERY, {}, options)
        setBlogs(blogs)
    }
    useEffect(() => {
        fetch()
    }, [])

    const urlFor = (source) => builder.image(source)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="blog"
            className="container mx-auto text-center py-20 px-section overflow-x-hidden"
        >
            <h2 className="xl:text-5xl font-semibold md:text-3xl text-2xl xl:leading-[56px] mb-6">
                Explorando Tecnologia, Processos e Dados: O Meu Blog
            </h2>
            <p className="text-text-secondary text-lg mb-16 max-w-[650px] mx-auto">
                Neste blog, compartilho insights sobre a transição para o mercado de tecnologia, minhas experiências com ferramentas como Power BI, SAP, SQL, além de dicas de boas práticas de desenvolvimento e automação. A ideia é dividir meus conhecimentos para ajudar outros profissionais da área e aqueles que estão começando. Fique à vontade para explorar e aprender mais sobre essas tecnologias que estão moldando o futuro.
            </p>
            <Slider {...settings}>
                {blogs.map((blog, index) => (
                    <div key={index} className="px-3">
                        <Card
                            date={formatDate(blog.date)}
                            img={urlFor(blog.poster.asset._ref).url()}
                            title={blog.blogName}
                            url={blog.link}
                            description={blog.description}  // Adicionando descrição
                        />
                    </div>
                ))}
            </Slider>
            <a 
                href="#contact" 
                className="mt-8 inline-block rounded bg-primary px-6 py-3 text-white font-medium transition hover:scale-110 hover:shadow-xl"
            >
                Entre em Contato e Compartilhe suas Ideias!
            </a>
        </motion.div>
    )
}

export default Blog