import CarouselBannerWrapper from "@/components/CarouselBanner/carouselBannerWrapper"
import { getMovie, getMovieVideos, getPopularMovies, getSearchMovies } from "@/components/MovieCarousel/getMovies"
import MoviesCarousel from "@/components/MovieCarousel/movieCarousel"
import VideoBannerWrapper from "@/components/MovieComponent/videoBannerCarousel"
import { notFound } from "next/navigation"

type Props = {
    params:{
        id:number
    }
}

const MoviePage = async ({params:{id}}:Props) => {
    if(!id) notFound()
    return (
            <VideoBannerWrapper id={id}/>
    )
}

export default MoviePage