import React from 'react'
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

const Sidebar = () => {

    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl" />,
            name: "Home",
        },
        // {
        //   icon: <FaRegCompass className="text-xl" />,
        //   name: "Explore",
        // },
        {
            icon: <MdOutlineSlowMotionVideo className="text-xl" />,
            name: "Shorts",
        },
        {
            icon: <MdSubscriptions className="text-xl" />,
            name: "Subscriptions",
        },
    ];

    const secondaryLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl" />,
            name: "Sport",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <MdSettings className="text-xl" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl" />,
            name: "Report history",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl" />,
            name: "Send feedback",
        },
    ];

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How YouTube works",
            "Test new features",
        ],
    ];


    return (
        // <div className='w-2/12 bg-[#212121] pr-3 px-2 pb-4 overflow-auto sidebar'>
        <div className='w-5/12 bg-[#212121] pr-3 px-2 pb-4 overflow-auto sidebar'>
            <ul className='flex flex-col mt-2'>
                {/* <ul className='flex flex-col border-b-2 pb-4 border-gray-700 '> */}
                {mainLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className={`ml-2 pl-4 py-3 lg:hover:bg-zinc-600 rounded-xl lg:${name === "Home" ? "bg-slate-600" : ""}`}>
                            <a href="#" className='flex items-center gap-5 '>{icon}
                                <span className='text-sm tracking-wider lg:block hidden'>{name}</span>
                            </a>
                        </li>
                    )
                })}</ul>
            <hr className='border-zinc-600 mt-2' />
            <ul className='flex flex-col mt-2 '>
                {/* <ul className='flex flex-col border-b-2 pb-4 border-gray-700 '> */}
                {secondaryLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className={`ml-2 pl-4 py-3 lg:hover:bg-zinc-600 rounded-xl  lg:${name === "Home" ? "bg-slate-600" : ""}`}>
                            <a href="#" className='flex items-center gap-5'>{icon}
                                <span className='text-sm tracking-wider lg:block hidden'>{name}</span>
                            </a>
                        </li>
                    )
                })}</ul>
            <hr className='border-zinc-600 mt-2' />
            <div className='pt-2'>
                <p className='pl-6 lg:block hidden'>Explore</p>
                <ul className='flex flex-col '>
                    {subscriptionLinks.map(({ icon, name }) => {
                        return (
                            <li key={name} className={`ml-2 pl-4 py-3 lg:hover:bg-zinc-600 rounded-xl  lg:${name === "Home" ? "bg-slate-600" : ""}`}>
                                <a href="#" className='flex items-center gap-5'>{icon}
                                    <span className='text-sm tracking-wider lg:block hidden'>{name}</span>
                                </a>
                            </li>
                        )
                    })}</ul>
            </div>
            <hr className='border-zinc-600 mt-2' />
            <ul className='flex flex-col '>
                {helpLinks.map(({ icon, name }) => {
                    return (
                        <li key={name} className={`ml-2 pl-4 py-3 lg:hover:bg-zinc-600 rounded-xl  lg:${name === "Home" ? "bg-slate-600" : ""}`}>
                            <a href="#" className='flex items-center gap-5'>{icon}
                                <span className='text-sm tracking-wider lg:block hidden'>{name}</span>
                            </a>
                        </li>
                    )
                })}</ul>
            <hr className='border-zinc-600 mt-2' />
            <ul className='flex flex-wrap pl-4 gap-2  my-5'>
                {
                    textLinks[0].map((item) => {
                        return (
                            <li className='leading-3' key={item} ><a href="#" ><small className='text-xs'>{item}</small></a></li>
                        )
                    })
                }
            </ul>
            <ul className='flex flex-wrap pl-4 gap-2 mt-2'>
                {
                    textLinks[1].map((item) => {
                        return (
                            <li className='leading-3' key={item}><a href="#" ><small className='text-xs'>{item}</small></a></li>
                        )
                    })
                }
            </ul>
            <div className='pl-4 mt-2'>
                <small>&copy; 2023 Google LLC</small><br/>
                <small>This clone is for study purpose</small>
            </div>
        </div>
    )
}

export default Sidebar