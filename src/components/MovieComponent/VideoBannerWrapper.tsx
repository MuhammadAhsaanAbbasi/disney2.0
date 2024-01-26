import React from 'react'
import { getMovie,getMovieVideos } from '../MovieCarousel/getMovies'
import VideoBanner from './VideoBanner'
type Props = {
  id:number
}


const VideoBannerWrapper = async ({id}:Props) => {
  const VideoData = await getMovieVideos(id)
  const MoviesData = await getMovie(id)
  return <VideoBanner movies={MoviesData} videos={VideoData}/>
}

export default VideoBannerWrapper