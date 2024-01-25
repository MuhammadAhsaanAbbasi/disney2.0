"use client"
import React, { useState } from 'react'
import { VideoData } from '../../../../typings'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlayIcon } from './playIcon'
import { PlayCircleIcon } from 'lucide-react'

const PlayButton = ({ videos }: { videos: VideoData | undefined }) => {
    const [Open, setOpen] = useState(false)
    return (
        <div className='cursor-pointer'>
            <PlayCircleIcon className='cursor-pointer'/>
        </div>
    )
}

export default PlayButton