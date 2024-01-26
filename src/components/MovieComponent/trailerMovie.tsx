"use client"
import { PlayCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import { VideoData } from '../../../typings'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ReactPlayer from 'react-player'


export function TrailerMovie  ({video}:{video:VideoData | undefined})  {
    const [Open, setOpen] = useState(false)
    return (
        <Dialog
        open={Open}
        onOpenChange={(setOpenChange)=>{
            setOpen(setOpenChange)
        }}
        >
            <DialogTrigger className='flex items-center gap-x-2 text-xl hover:text-blue-600 hover:scale-[1.04] transition-all duration-300 ease-in-out'>
                <PlayCircleIcon className='cursor-pointer' size={60} /><span>Watch Trailer</span>
                </DialogTrigger>
            <DialogContent className="h-[65vh] w-full">
            <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${video?.key}`}
            onProgress={()=>{played: 0.12; playedSeconds: 11.3; loaded: 0.34; loadedSeconds: 16.7}}
            controls
            width={"100%"}
            height={"100%"}
            />
            </DialogContent>
        </Dialog>
    )
}
