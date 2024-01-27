import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearhInput from '../MovieInput/movieInput'
import CategoryDropDown from '../CategoryDropDown/categoryDropDown'
import ThemeBtn from '../Themebtn/themeBtn'
import DropDown from './dropDown'

const Header = () => {
    return (
        <header className='flex justify-between items-center px-2 md:px-6 sticky top-0 z-50 bg-transparent dark:bg-gray-800/0'>
                    <Link href={"/"}>
                    <Image
                    src={"/assets/disney.png"}
                    alt='Any Image'
                    height={500}
                    width={500}
                    className='h-20 w-28 md:h-28 md:w-28 invert dark:invert-0'
                    />
                    </Link>
                    <div className='hidden md:flex justify-between items-center gap-x-2 md:gap-x-4'>
                        <CategoryDropDown/>
                        <SearhInput/>
                        <ThemeBtn/>
                    </div>
                    <div className='flex justify-between items-center gap-x-2 md:gap-x-4 md:hidden px-4'>
                        <CategoryDropDown/>
                        <DropDown/>
                    </div>
        </header>
    )
}

export default Header