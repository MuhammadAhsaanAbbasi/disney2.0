import CarouselBannerWrapper from "@/components/CarouselBanner/carouselBannerWrapper";
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from "@/components/MovieCarousel/getMovies";
import MoviesCarousel from "@/components/MovieCarousel/movieCarousel";
import { PlayCircleIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SignedIn } from "@clerk/nextjs";

export default async function Home() {
  const upComingMovies = await getUpComingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()
  return (
    <>
      <CarouselBannerWrapper />
      <SignedIn>
        <div className="flex flex-col space-y-2 py-4 ">
          <MoviesCarousel title="UpComing Movies" movies={upComingMovies} />
          <MoviesCarousel title="TopRated Movies" movies={topRatedMovies} />
          <MoviesCarousel title="Popular Movies" movies={popularMovies} />
        </div>
      </SignedIn>
    </>
  );
}
