import CarouselBannerWrapper from "@/components/CarouselBanner/carouselBannerWrapper"
import VideoBannerWrapper from "@/components/MovieComponent/videoBannerCarousel"
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { notFound } from "next/navigation"

type Props = {
    params: {
        id: number
    }
}

const MoviePage = async ({ params: { id } }: Props) => {
    if (!id) notFound()
    return (
        <>
            <SignedIn>
                <VideoBannerWrapper id={id} />
            </SignedIn>
            <SignedOut>
                    <CarouselBannerWrapper/>
            </SignedOut>
        </>
    )
}

export default MoviePage