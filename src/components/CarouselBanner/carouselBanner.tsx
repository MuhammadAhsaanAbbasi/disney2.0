"use client"
import React from 'react'
import { Movie } from '../../../typings'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { motion } from "framer-motion"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import getImagePath from '../MovieCarousel/getImagePath'

const CarouselBanner = ({ movies }: { movies: Movie[] }) => {
    const scale = {
        hidden: { opacity: 0, scale: 0.80, x: 60 },
        visible: { opacity: 1, scale: 1, x: 0 },
    };
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full relative cursor-pointer -mt-20 lg:-mt-28 -z-50"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {movies.map((movie) => (
                    <CarouselItem key={movie.id}>
                        <div className="flex-full min-w-0 relative">
                            <Image
                                src={getImagePath(movie.backdrop_path, true)}
                                alt={movie.title}
                                width={1920}
                                height={1080}
                            />
                            <div className='hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white'>
                                <motion.h2 
                                className='max-w-xl z-50 text-4xl font-semibold'
                                variants={scale}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.2,
                                    duration: 2,
                                    ease: 'easeInOut'
                                }}
                                >{movie.title}</motion.h2>
                                <motion.p 
                                className='max-w-xl line-clamp-3'
                                variants={scale}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.2,
                                    duration: 2,
                                    ease: 'easeInOut'
                                }}
                                >{movie.overview}</motion.p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default CarouselBanner