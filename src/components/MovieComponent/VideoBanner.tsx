"use client"
import { MovieData, VideoData } from '../../../typings'
import getImagePath from '@/components/MovieCarousel/getImagePath'
import Image from 'next/image'
import { motion } from "framer-motion"
import { formatTime } from '@/utils/utils'
import { TrailerMovie } from './trailerMovie'
import ContentWrapper from './contentWrapper'

const VideoBanner = ({ movies, videos }: { movies: MovieData, videos: VideoData[] }) => {
    const Variants = {
        hidden: { opacity: 0, y: 60, x: -60 },
        visible: { opacity: 1, y: 0, x: 0 },
    };
    const translateX = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    };
    const translateXX = {
        hidden: { opacity: 0, x: 40 },
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
    const runtimeInMinutes = movies.runtime;
    const formattedTime = formatTime(runtimeInMinutes);
    const trailerMovie = videos.find((video) => video.type == "Trailer")
    return (
        <>
        <ContentWrapper>
            <section className="w-full relative cursor-pointer lg:-mt-28">
                <Image
                    src={getImagePath(movies.backdrop_path, true)}
                    className="flex-full min-w-0 h-full max-h-[96vh] object-center blur opacity-95 dark:blur-sm dark:opacity-35"
                    alt={movies.title}
                    width={1920}
                    height={1080}
                />
                <section className='flex flex-col md:flex-row justify-center items-center gap-x-10 absolute top-32 md:top-0 left-1 sm:left-0 mt-40 lg:mt-28 py-1 bg-transparent h-full w-full p-10 space-y-5'>
                    {/* Movie Poster */}
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

                    {/* Movie Information */}
                    <div className='md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col justify-between max-h-screen h-full gap-y-6'>
                        <div className='flex flex-col gap-y-2 justify-center'>

                            {/* Movie Title and Tagline */}
                            <motion.h1
                                className='z-50 text-5xl font-bold text-center md:text-left'
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
                                className='text-xl font-semibold text-[rgb(32,40,49)] text-center md:text-left'
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

                        {/* Genres */}
                        <div className='flex items-center gap-x-2 relative flex-wrap'>
                            {movies.genres.map((genre) => (
                                <motion.h3
                                    key={genre.id}
                                    className='bg-green-700 p-1 rounded-lg text-xs font-semibold cursor-text mb-2 md:mb-0'
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

                        {/* Trailer */}
                        <motion.div
                            className='cursor-pointer text-center'
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

                        {/* Overview */}
                        <div className='flex flex-col justify-center gap-y-2 text-center md:text-left'>
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

                        {/* Additional Information */}
                        <div>
                            <div className='flex flex-col sm:flex-row items-center justify-center gap-x-4 text-center sm:text-left'>
                                <motion.h3
                                    className='flex items-center gap-x-2 text-lg font-normal md:text-xl md:font-medium'
                                    variants={translateX}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.2,
                                        duration: 2,
                                        ease: "backInOut"
                                    }}
                                >Status: <span className='text-xl font-normal text-[rgb(152,156,160)]'>{movies.status}</span></motion.h3>
                                <motion.h3 className='flex items-center gap-x-2 text-lg font-normal md:text-xl md:font-medium'
                                    variants={translateY}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.2,
                                        duration: 2,
                                        ease: "backInOut"
                                    }}
                                >Release Date: <span className='text-xl font-normal text-[rgb(152,156,160)]'>{new Date(movies.release_date).toLocaleDateString
                                    ("en-US", {
                                        day: 'numeric',
                                        month: "short",
                                        year: 'numeric'
                                    })
                                }</span></motion.h3>
                                <motion.h3 className='flex items-center gap-x-2 text-lg font-normal md:text-xl md:font-medium'
                                    variants={translateX}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{
                                        delay: 0.2,
                                        duration: 2,
                                        ease: "backInOut"
                                    }}
                                >Runtime: <span className='text-xl font-normal text-[rgb(152,156,160)]'>{formattedTime}</span ></motion.h3>
                            </div>
                            <hr className='h-1 bg-[rgb(255,220,115)] rounded' />
                        </div>
                    </div>
                </section>
            </section>
            </ContentWrapper>
        </>
    )
}

export default VideoBanner