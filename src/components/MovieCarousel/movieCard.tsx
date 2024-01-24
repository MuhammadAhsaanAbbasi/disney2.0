import React from 'react'
import { Movie } from '../../../typings'
import Image from 'next/image'
import getImagePath from './getImagePath'
const MovieCard = ({movie}:{movie:Movie}) => {
    return (
        <div className='relative flex-shrink-0 cursor-pointer hover:scale-[1.02] transform transition duration-200 ease-in-out hover:drop-shadow-lg'>
            <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10'
            />
            <p className='absolute z-20 bottom-5 left-5 text-xl font-semibold'>{movie.title}</p>
            <Image
            className='w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-md'
            src = {getImagePath(movie.backdrop_path||movie.poster_path)}
            alt={movie.title}
            height={1080}
            width={1920}
            />
        </div>
    )
}

export default MovieCard