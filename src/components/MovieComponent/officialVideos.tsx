"use client"
import React from 'react'
import { VideoData } from '../../../typings'
import { motion } from "framer-motion"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MoreVideos } from './moreVideos';
import ContentWrapper from './contentWrapper';

const OfficialVideos = ({ videos }: { videos: VideoData[] }) => {
    const scale = {
        hidden: { opacity: 0, scale: 0.75, x: 40, y: 30 },
        visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    };
    const scaleX = {
        hidden: { opacity: 0, scale: 0.75, x: 40, },
        visible: { opacity: 1, scale: 1, x: 0, },
    };
    return (
        <ContentWrapper>
            <section className='relative flex flex-col justify-center mt-[77rem] md:mt-[18rem] lg:mt-40 py-1 lg:pt-0 bg-transparent h-full w-full'>
                <motion.h2
                    className='text-2xl font-medium'
                    variants={scaleX}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        delay: 0.1,
                        duration: 1.5,
                        ease: "backInOut"
                    }}
                >Official Videos</motion.h2>

                <div className="flex sm:gap-x-6 gap-x-8 overflow-x-auto px-5 lg:px-10 py-5 scrollbar-hide">
                    {videos?.map((video) => (
                        <div
                            key={video.id}
                            className="flex flex-col gap-y-2"
                        >
                            <motion.div
                                variants={scale}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.1,
                                    duration: 1.5,
                                    ease: "backInOut"
                                }} className="relative flex-shrink-0 cursor-pointer hover:scale-[1.02] transform transition duration-200 ease-in-out hover:drop-shadow-lg">
                                <Image
                                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    alt='Any Image'
                                    className='w-full lg:min-w-[200px] h-40 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-md'
                                    width={500}
                                    height={500}
                                />
                                <div className='absolute z-20 bottom-5 right-5'>
                                    <MoreVideos video={video} />
                                </div>
                            </motion.div>
                            <motion.h3
                                className="text-lg text-center md:text-left"
                                variants={scale}
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    delay: 0.1,
                                    duration: 1.5,
                                    ease: "backInOut"
                                }}
                            >{video.name}</motion.h3>
                        </div>
                    ))}
                </div>
            </section>
        </ContentWrapper>
    )
}

export default OfficialVideos