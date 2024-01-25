import { getDiscoverMovies } from "@/components/MovieCarousel/getMovies"
import MoviesCarousel from "@/components/MovieCarousel/movieCarousel"

type Props = {
    params:{
        id:string
    },
    searchParams:{
        genre:string
    }
}

const GenrePage = async ({params:{id},searchParams:{genre}}:Props) => {
    const movies = await getDiscoverMovies(id)
    return (
        <div className="max-w-7xl mx-auto">
        {/* Open Ai Suggestion */}
        <div className="flex flex-col space-y-5 mt-10">
            <h1 className="text-6xl font-bold px-10">Results For: {genre}</h1>
            <MoviesCarousel title={genre} movies={movies} isVertical/>
        </div>
        </div>
    )
}

export default GenrePage