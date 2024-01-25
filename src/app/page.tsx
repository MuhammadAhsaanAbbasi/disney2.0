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
      <div className="flex flex-col space-y-2 xl:-mt-48 py-4">
        <MoviesCarousel title="UpComing Movies" movies={upComingMovies}/>
        <MoviesCarousel title="TopRated Movies" movies={topRatedMovies}/>
        <MoviesCarousel title="Popular Movies" movies={popularMovies}/>
      </div>
    </>
  );
}
