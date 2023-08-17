"use client"

import Link from "next/link";
import ProfileIcon from "./profileIcon";
import { useEffect, useState } from "react";

export default function Header({ pageName }: any) {
    const [userId, setUserId] = useState("");

    useEffect(() => setUserId(localStorage.getItem("userId")!), []);    
    
    if (!userId) {
        return (
            <header
            className="
        grid
        h-[60px] md:h-[80px]
        grid-cols-small-header md:grid-cols-big-header
        bg-gradient-to-r from-blue-dark to-blue-light"
        >
            <Link
                className="group
                flex
                items-center
                justify-center
                h-[60px] md:h-[100%]"
                href="/"
            >
                <svg
                    className="
                    p-[10px] 
                    h-[50px] 
                    rounded-[50%] 
                    group-hover:bg-blue-light"
                    width="50"
                    height="45"
                    viewBox="0 0 50 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="group-hover:stroke-blue-dark"
                        d="M10 16V43H25H40V16M2 15L25 2L48 15"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </Link>
            <h1
                className="
            flex flex-col
            justify-center
            text-white
            text-[35px] md:text-[50px]
            font-[700]"
            >
                {pageName}
            </h1>
        </header>
        )
    }

    return (
        <header
            className="
        grid
        h-[60px] md:h-[80px]
        grid-cols-small-header md:grid-cols-big-header
        bg-gradient-to-r from-blue-dark to-blue-light"
        >
            <Link
                className="group
                flex
                items-center
                justify-center
                h-[60px] md:h-[100%]"
                href="/"
            >
                <svg
                    className="
                    p-[10px] 
                    h-[50px] 
                    rounded-[50%] 
                    group-hover:bg-blue-light"
                    width="50"
                    height="45"
                    viewBox="0 0 50 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="group-hover:stroke-blue-dark"
                        d="M10 16V43H25H40V16M2 15L25 2L48 15"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </Link>
            <h1
                className="
            flex flex-col
            justify-center
            text-white
            text-[35px] md:text-[50px]
            font-[700]"
            >
                {pageName}
            </h1>
            <ProfileIcon userId={userId} />
        </header>
    );
}
