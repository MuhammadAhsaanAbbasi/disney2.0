"use client"
import { MovieData, VideoData } from '../../../typings'
import getImagePath from '@/components/MovieCarousel/getImagePath'
import Image from 'next/image'
import { motion } from "framer-motion"
import { PlayCircleIcon } from 'lucide-react'
import { TrailerMovie } from './trailerMovie'

const VideoBanner = ({ movies, videos }: { movies: MovieData, videos: VideoData[] }) => {
    const Variants = {
        hidden: { opacity: 0, y: 60, x: -60 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const translateX = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    };
    const translateY = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    };
    const scale = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1 },
    };
    const trailerMovie = videos.find((video) => video.type == "Trailer")
    return (
        <section className="w-full relative cursor-pointer lg:-mt-28">
            <Image
                src={getImagePath(movies.backdrop_path, true)}
                className="flex-full min-w-0 h-full max-h-[96vh] object-center blur opacity-95 dark:blur-sm dark:opacity-35"
                alt={movies.title}
                width={1920}
                height={1080}
            />
            <section className='flex justify-center items-center gap-x-10 absolute mt-0 top-0 left-0 lg:mt-28 py-1 bg-transparent h-full w-full p-10 space-y-5'>
                <motion.div
                    className='relative hover:scale-[1.02] transition-all transform ease-in-out'
                    variants={scale}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                        delay: 0.2,
                        duration: 1.5,
                        ease: 'easeInOut'
                    }}
                >
                    <Image
                        src={getImagePath(movies.poster_path, true)}
                        className='max-h-screen h-full rounded-xl max-w-sm'
                        alt=''
                        width={1920}
                        height={1080} />
                </motion.div>

                <div className='flex flex-col justify-between max-h-screen h-full gap-y-5'>
                    <div className='flex flex-col justify-between gap-y-6'>
                        <div className='flex flex-col gap-y-2 justify-center'>
                            <motion.h1 
                            className='z-50 text-5xl font-bold'
                            variants={translateY}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                delay: 0.2,
                                duration: 2,
                                ease: "backInOut"
                            }}
                            >{movies.title} ({movies.release_date?.split('-')[0]})</motion.h1>
                            <motion.p 
                            className='text-xl font-medium text-[rgb(142,148,155)]'
                            variants={translateX}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                delay: 0.2,
                                duration: 2,
                                ease: "backInOut"
                            }}
                            >{movies.tagline}</motion.p>
                        </div>
                        <div className='flex items-center gap-x-2 relative'>
                            {movies.genres.map((genre) => (
                                    <motion.h3
                                    key={genre.id}
                                        className='bg-green-700 p-1 rounded-lg text-xs font-semibold cursor-text'
                                        variants={Variants}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{
                                            delay: 0.2,
                                            duration: 2,
                                            ease: "circOut"
                                        }}
                                    >{genre.name}</motion.h3>
                            ))}
                        </div>
                        <motion.div 
                        className='cursor-pointer'
                        variants={Variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            delay: 0.2,
                            duration: 1.5,
                            ease: 'easeInOut'
                        }}
                        >
                            <TrailerMovie video={trailerMovie} />
                        </motion.div>
                        <div className='flex flex-col justify-center gap-y-2'>
                            <motion.h2 className='text-xl font-semibold cursor-pointer'
                                variants={translateY}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.2,
                                    duration: 2,
                                    ease: "backInOut"
                                }}
                            >OverView</motion.h2>
                            <motion.p className='max-w-xl text-lg font-normal cursor-pointer'
                                variants={translateX}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.2,
                                    duration: 2,
                                    ease: "backInOut"
                                }}
                            >{movies.overview}</motion.p>
                        </div>
                    </div>
                    <hr className='h-1 bg-[rgb(255,220,115)] rounded' />
                </div>
            </section>
        </section>
    )
}

export default VideoBanner