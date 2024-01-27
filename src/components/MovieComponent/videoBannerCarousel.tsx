import { getDiscoverMovies, getMovie,getMovieVideos} from '@/components/MovieCarousel/getMovies'
import VideoBanner from './VideoBanner'
import OfficialVideos from './officialVideos'
import MoviesCarousel from '../MovieCarousel/movieCarousel'

type Props = {
  id:number
}

const VideoBannerWrapper = async ({id}:Props) => {
  const VideoData = await getMovieVideos(id)
  const MoviesData = await getMovie(id)
  const popularMovies = await getDiscoverMovies()
  return (
    <>
    <VideoBanner movies={MoviesData} videos={VideoData}/>
    <OfficialVideos videos={VideoData}/>
    <MoviesCarousel title="You May Also Like it" movies={popularMovies} />
    </>
  )
}

export default VideoBannerWrapper

