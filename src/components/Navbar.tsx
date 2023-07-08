import React from 'react'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom"
import youtube from "../images/yt-logo.png";



export const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50]">
            <div className="flex gap-6  items-center text-2xl">
                <div>
                    <GiHamburgerMenu />
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center">
                        {/* <BsYoutube className='' */}
                        <img src={youtube} alt='youtube icons' className='h-6' />
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-between gap-4">
                <form>
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full">
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className='text-xl' />
                            </div>
                            <input type="text"
                                className='w-96 bg-zinc-900 focus:outline-none border-none'
                            />
                            <AiOutlineClose className='text-xl cursor-pointer' />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full'>
                            <AiOutlineSearch className='text-xl' />
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 bg-zinc-900 rounded-full">
                    <TiMicrophone />
                </div>
            </div>
            <div className='flex gap-5 items-center text-xl'>
                <BsCameraVideo />
                <IoAppsSharp />
                <div className="relative">
                    <BsBell />
                    <span className='absolute bottom-2 left-2 bg-red-600 rounded-full text-xs px-1'>
                        9+
                    </span>
                </div>
                <img src="https://yt3.ggpht.com/yti/AHyvSCCIrVFwBQtXe68f7Qnnbp--q-FptrvfqHt2rg3-Jg=s88-c-k-c0x00ffffff-no-rj-mo" 
                className='rounded-full w-9 h-9'
                alt='channel-logo'/>
            </div>
        </div>
    )
}
