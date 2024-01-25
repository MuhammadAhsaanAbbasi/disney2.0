import { getPopularMovies, getSearchMovies } from "@/components/MovieCarousel/getMovies"
import MoviesCarousel from "@/components/MovieCarousel/movieCarousel"
import { notFound } from "next/navigation"

type Props = {
    params:{
        term:string
    }
}

const SearchPage = async ({params:{term}}:Props) => {
    if(!term) notFound()
    const termToUse = decodeURI(term)
    const movies = await getSearchMovies(termToUse)
    // console.log(movies)
    const popularMovies = await getPopularMovies()
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-20">
                <h1 className="text-6xl font-bold px-10">Results For: {termToUse}</h1>
                <MoviesCarousel title="Movies" movies={movies} isVertical/>
                <MoviesCarousel title="You May Also Like it" movies={popularMovies} />
            </div>
        </div>
    )
}

export default SearchPage