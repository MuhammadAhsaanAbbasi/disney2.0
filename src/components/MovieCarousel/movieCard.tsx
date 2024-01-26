"use client"
import React from 'react'
import { Movie } from '../../../typings'
import Image from 'next/image'
import getImagePath from './getImagePath'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const MovieCard = ({ movie }: { movie: Movie }) => {
    const router = useRouter()
    return (
        <div className='relative flex-shrink-0 cursor-pointer hover:scale-[1.02] transform transition duration-200 ease-in-out hover:drop-shadow-lg'>
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
        </div>
    )
}

export default MovieCard