import React from 'react'
import { getDiscoverMovies } from '../MovieCarousel/getMovies'
import CarouselBanner from './carouselBanner'
type Props = {
  id?:string
  keywords?:string
}
const CarouselBannerWrapper = async ({id,keywords}:Props) => {
  const movies = await getDiscoverMovies(id,keywords)
  return <CarouselBanner movies={movies}/>
}

export default CarouselBannerWrapper