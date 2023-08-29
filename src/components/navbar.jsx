import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-dom'

import logo from '../assets/logo.webp'
import audio from '../assets/audio.mp3'
import { IconVolume, IconVolumeOff, IconMenu2 } from '@tabler/icons-react';


export default function Navbar() {
    const [volumeOn, setVolumeOn] = useState(false)
    const [toggle, setToggle] = useState(false)

    const audioRef = useRef(new Audio(audio))

    const sections = [
        { id: 1, title: "About" },
        { id: 2, title: "Experiences" },
        { id: 3, title: "Awards" },
        { id: 4, title: "Contacts" },
    ]

    // Handle Volume Click
    const volumeClick = () => {
        setVolumeOn(!volumeOn)
    }

    // Handle Audio and loop if audio is still playing
    audioRef.current.loop = true;
    useEffect(() => {
        if (volumeOn) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [volumeOn]);

    // Onclick scroll to the top of the page
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    // Make sure that when they reload that it scrolls to the top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return <>
        <div className="flex fixed w-full items-center top-0 px-6 py-4 z-20 bg-black">
            <div className="flex justify-between items-center mx-auto w-full">
                <div onClick={scrollTop} className='cursor-pointer transition ease-in-out hover:scale-125'>
                    <img src={logo} alt="logo" className="h-11 object-contain brightness-200" />
                </div>
                <div className="hidden sm:flex text-white space-x-10">

                    <div onClick={volumeClick} className="transition transform duration-200 hover:scale-150 cursor-pointer">
                        {volumeOn ? <IconVolume /> : <IconVolumeOff />}
                    </div>

                    <ul className="list-none flex space-x-10">
                        {sections.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.title}`} className="transition transform duration-200 hover:scale-150 inline-block cursor-pointer">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex sm:hidden flex-1 justify-end items-center text-white gap-3 ">
                    <div onClick={volumeClick} className="transition transform duration-200 hover:scale-150 cursor-pointer">
                        {volumeOn ? <IconVolume /> : <IconVolumeOff />}
                    </div>
                    <IconMenu2 className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={(() => setToggle(!toggle))} />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 z-20 rounded-xl min-w-[140px]`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {sections.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.title}`} className="transition transform duration-200 hover:scale-125 inline-block cursor-pointer">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    </>
}

