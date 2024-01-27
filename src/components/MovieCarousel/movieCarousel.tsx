"use client"
import React from 'react'
import { Movie } from '../../../typings'
import MovieCard from './movieCard'
import { cn } from '@/lib/utils'
import { motion } from "framer-motion"

type Props = {
    title: string,
    movies: Movie[]
    isVertical?: boolean
}
const MoviesCarousel = ({ title, movies, isVertical }: Props) => {
    const scale = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const scaleXY = {
        hidden: { opacity: 0, scale: 0.75, x: 40, y: 30 },
        visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    };
    return (
        <section className='relative'>
            <motion.h2 className='text-4xl font-semibold px-3'
                variants={scale}
                initial="hidden"
                whileInView="visible"
                transition={{
                    delay: 0.1,
                    duration: 1.5,
                    ease: "backInOut"
                }}
            >{title}</motion.h2>
            <div className={cn("flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide", isVertical && "flex-col space-x-0 space-y-12")}>
                {isVertical ?
                    movies?.map((movie) => (
                        <div key={movie.id}
                            className='flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'>
                            <MovieCard movie={movie} />
                            <motion.div className='max-w-2xl space-y-2'
                                variants={scaleXY}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.1,
                                    duration: 1.5,
                                    ease: "backInOut"
                                }}
                            >
                                <motion.p className='text-2xl font-semibold'
                                    variants={scaleXY}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.1,
                                        duration: 1.5,
                                        ease: "backInOut"
                                    }}
                                >{movie.title}({movie.release_date?.split('-')[0]})</motion.p>
                                <hr />
                                <motion.p className='text-lg font-normal'
                                    variants={scaleXY}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.1,
                                        duration: 1.5,
                                        ease: "backInOut"
                                    }}
                                >{movie.overview}</motion.p>
                            </motion.div>
                        </div>
                    ))
                    :
                    movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </section>
    )
}

export default MoviesCarousel