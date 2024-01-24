
type Props = {
    params:{
        id:string
    },
    searchParams:{
        genre:string
    }
}

const GenrePage = ({params:{id},searchParams:{genre}}:Props) => {
    return (
        <div>GenrePage {id} and page {genre}</div>
    )
}

export default GenrePage