import React from 'react'
import { getMovie,getMovieVideos } from '@/components/MovieCarousel/getMovies'
import VideoBanner from './videoBanner'

type Props = {
  id:number
}

const VideoBannerWrapper = async ({id}:Props) => {
  const VideoData = await getMovieVideos(id)
  const MoviesData = await getMovie(id)
  return <VideoBanner movies={MoviesData} videos={VideoData}/>
}

export default VideoBannerWrapper

