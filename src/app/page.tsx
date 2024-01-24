import CarouselBannerWrapper from "@/components/CarouselBanner/carouselBannerWrapper";
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from "@/components/MovieCarousel/getMovies";
import MoviesCarousel from "@/components/MovieCarousel/movieCarousel";


export default async function Home() {
  const upComingMovies = await getUpComingMovies()
  const topRatedMovies= await getTopRatedMovies()
  const popularMovies = await getPopularMovies()
  return (
    <>
      <CarouselBannerWrapper/>
      <div>
        <MoviesCarousel title="UpComing Movies" movies={upComingMovies}/>
        <MoviesCarousel title="TopRated Movies" movies={topRatedMovies}/>
        <MoviesCarousel title="Popular Movies" movies={popularMovies}/>
      </div>
    </>
  );
}
