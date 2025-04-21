"use client"
import { client } from "@/sanity/client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import createImageUrlBuilder from "@sanity/image-url"
import { motion } from "framer-motion"

const POSTS_QUERY = `*[_type=="blog"]{poster,date,blogName,link}`
const options = { next: { revalidate: 30 } }

export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
}

const Card = ({ img, date, title, url }) => (
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
        </div>
    </Link>
)

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const builder = createImageUrlBuilder(client)

    const fetch = async () => {
        try {
            const blogs = await client.fetch(POSTS_QUERY, {}, options)
            setBlogs(blogs)
        } catch (error) {
            console.error("Error fetching blogs:", error)
            setBlogs([]) // Garantir que seja um array mesmo se der erro
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    const urlFor = (source) => builder.image(source)

    var settings = {
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
                My Blog
            </h2>
            <p className="text-text-secondary text-lg mb-16 max-w-[650px] mx-auto">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
            </p>
            {blogs.length > 0 ? (
                <Slider {...settings}>
                    {blogs.map((blog, index) => (
                        <div key={index} className="px-3">
                            <Card
                                date={formatDate(blog.date)}
                                img={
                                    blog.poster?.asset?._ref
                                        ? urlFor(blog.poster.asset._ref).url()
                                        : "/default-image.jpg" // Imagem padrão caso não tenha
                                }
                                title={blog.blogName}
                                url={blog.link}
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>No blogs available</p> // Mensagem caso não haja blogs
            )}
        </motion.div>
    )
}

export default Blog
