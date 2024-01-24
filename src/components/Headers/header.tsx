import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearhInput from '../MovieInput/movieInput'
import CategoryDropDown from '../CategoryDropDown/categoryDropDown'
import ThemeBtn from '../Themebtn/themeBtn'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center px-6'>
                    <Link href={"/"}>
                    <Image
                    src={"/assets/disney.png"}
                    alt='Any Image'
                    height={500}
                    width={500}
                    className='h-24 w-28 invert dark:invert-0'
                    />
                    </Link>
                    <div className='flex justify-between items-center gap-x-4'>
                        <CategoryDropDown/>
                        <SearhInput/>
                        <ThemeBtn/>
                    </div>
            </div>
        </header>
    )
}

export default Header