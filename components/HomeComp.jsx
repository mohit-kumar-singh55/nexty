import React, { useEffect, useRef, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import SideBar from './SideBar';
import UserProfile from './UserProfile';
import { client } from "../client";

import logo from "../public/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

function HomeComp() {
    const [toggleSibeBar, setToggleSibeBar] = useState(false);

    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear;

    return (
        <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
            <div className="hidden flex-initial md:flex h-screen">
                <SideBar />
            </div>
            <div className="flex md:hidden flex-row">
                <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSibeBar(false)} />
                <Link href='/' passHref>
                    <Image src={logo} alt="logo" width="150px" height="50px" />
                </Link>
                <Link href={`user-profile/${user?._id}`} passHref></Link>
            </div>
        </div>
    )
}

export default HomeComp