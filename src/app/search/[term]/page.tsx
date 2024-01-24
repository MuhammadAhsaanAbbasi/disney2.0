import { notFound } from "next/navigation"

type Props = {
    params:{
        term:string
    }
}

const SearchPage = ({params:{term}}:Props) => {
    if(!term) notFound()
    const SearchParams = decodeURI(term)
    return (
        <div>SearchPage: {SearchParams}</div>
    )
}

export default SearchPage