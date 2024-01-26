"use client"
import React from 'react'
import { MovieData,VideoData } from '../../../typings'
import getImagePath from '@/components/MovieCarousel/getImagePath'
import Image from 'next/image'
import {motion} from "framer-motion"

const VideoBanner = ({ movies, videos }: { movies: MovieData, videos: VideoData[] }) => {
    const Variants = {
        hidden: { opacity: 0, y: 60, x: -60 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const fadeout = {
        hidden: { opacity: 0, y: 60, x: 30 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const translate = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    };
    const scale = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };
    const trailerMovie = videos.find((video)=>video.type =="Trailer")
    return (
        <section
            className="w-full relative cursor-pointer lg:-mt-24 -z-50">
            <div className="flex-full min-w-0 relative">
                <Image
                    src={getImagePath(movies.backdrop_path, true)}
                    className="h-full max-h-[96vh] object-center blur opacity-95 dark:blur-sm dark:opacity-35"
                    alt={movies.title}
                    width={1920}
                    height={1080}
                />
                <section className='hidden lg:flex justify-center items-center gap-x-10 absolute mt-0 top-0 left-0 lg:mt-16 py-8 bg-transparent z-20 h-full w-full p-10 space-y-5'>
                    <motion.div 
                    className='relative hover:blur'
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
                        <Image
                            src={getImagePath(movies.poster_path, true)}
                            className='max-h-[90vh] h-full rounded-xl max-w-sm'
                            alt=''
                            width={1920}
                            height={1080} />
                    </motion.div>
                    <div className='flex flex-col justify-between max-h-screen h-full gap-y-5'>
                        <div className='flex flex-col justify-between gap-y-6'>
                            <div className='flex flex-col gap-y-2 justify-center'>
                                <h1 className='z-50 text-5xl font-bold'>{movies.title} ({movies.release_date?.split('-')[0]})</h1>
                                <p className='text-xl font-medium text-[rgb(142,148,155)]'>{movies.tagline}</p>
                            </div>
                            <div className='flex items-center gap-x-2 relative'>
                                {movies.genres.map((genre) => (
                                    <div key={genre.id} className='cursor-pointer hover:scale-[1.02] transform transition duration-200 ease-in-out hover:drop-shadow-lg hover'>
                                        <h3 className='bg-green-700 p-1 rounded-lg text-xs font-semibold'>{genre.name}</h3>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col justify-center gap-y-2'>
                                <h2 className='text-xl font-semibold cursor-pointer'>OverView</h2>
                                <p className='max-w-xl text-lg font-normal cursor-pointer'>{movies.overview}</p>
                            </div>
                        </div>
                        <hr className='h-1 bg-[rgb(255,220,115)]' />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default VideoBanner