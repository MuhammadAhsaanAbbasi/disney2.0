"use client"
import React from 'react'
import { Movie } from '../../../typings'
import Image from 'next/image'
import getImagePath from './getImagePath'
import Link from 'next/link'
import { motion } from "framer-motion"
const MovieCard = ({ movie }: { movie: Movie }) => {
    const scale = {
        hidden: { opacity: 0, scale: 0.75, x: 40, y:30 },
        visible: { opacity: 1, scale: 1, x: 0, y:0 },
    };
    return (
        <motion.div 
        variants={scale}
        initial="hidden"
        whileInView="visible"
        transition={{
            delay: 0.1,
            duration: 1.5,
            ease: "backInOut"
        }}
        className='relative flex-shrink-0 cursor-pointer hover:scale-[1.02] transform transition duration-200 ease-in-out hover:drop-shadow-lg'>
            <Link href={`/movies/${movie.id}`}>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10'
                />
                <p className='absolute z-20 bottom-5 left-5 text-xl font-semibold'>{movie.title}</p>
                <Image
                    className='w-fit lg:min-w-[400px] h-56  object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-md'
                    src={getImagePath(movie.backdrop_path || movie.poster_path)}
                    alt={movie.title}
                    height={1080}
                    width={1920}
                />
            </Link>
        </motion.div>
    )
}

export default MovieCard