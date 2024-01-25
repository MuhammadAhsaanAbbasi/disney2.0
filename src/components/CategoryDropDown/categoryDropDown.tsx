import Link from "next/link"
import { Generes } from "../../../typings"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaAngleDown } from "react-icons/fa6";

export default async function CategoryDropDown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
    const options: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }
    const response = await fetch(url, options)
    const data:Generes = await response.json()
    // console.log(data)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-x-2 justify-center text-xl font-semibold">Category <FaAngleDown /></DropdownMenuTrigger>
            <DropdownMenuContent >
                {data.genres.map((category)=>(
                    <DropdownMenuItem key={category.id}>
                        <Link href={`/genre/${category.id}?genre=${category.name}`}>{category.name}</Link></DropdownMenuItem>
                    ))}
                    </DropdownMenuContent>
        </DropdownMenu>
    )
}