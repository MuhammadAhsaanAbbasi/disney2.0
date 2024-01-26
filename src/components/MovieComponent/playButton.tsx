import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { VideoData } from "../../../typings"


export default function PlayButton({ videos }: { videos: VideoData | undefined }) {
    return (
        <Button className="hover:scale-105 hover:bg-red-600">
            Click  Me
        </Button>
    )
}
