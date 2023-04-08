import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { FaQuestion, FaFlagCheckered } from 'react-icons/fa'


const Navbar = () => {
    return (
        <div className='navbar'>
            {/* header */}
            <div className="flex items-center justify-center h-full w-1/4 text-3xl">
                Podium
            </div>
            {/* Nav buttons */}
            <div className="flex flex-row items-center justify-evenly h-full w-3/4">
                <Link href={'/'}>
                    <span className="navButton">
                        <AiOutlineHome className='navIcon'/>
                        <h1>Home</h1>
                    </span>
                </Link>
                <Link href={'/predict'}>
                    <span className="navButton">
                        <FaFlagCheckered className='navIcon'/>
                        <h1>Predict</h1>
                    </span>
                </Link>
                <Link href={'/about'}>
                    <span className="navButton">
                        <FaQuestion className='navIcon'/>
                        <h1>About</h1>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar