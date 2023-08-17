"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfileIcon({ userId }: any) {
    const [name, setName] = useState("");
    fetch(`https://rdputilities-api.onrender.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
            const user = data;

            setName(
                `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
            );
        })
        .catch((error) => console.error(error));

    return (
        <Link
            className="
            flex flex-col
            justify-center align-center
            relative
            rounded-[50%]
            w-[50px] md:w-[65px]
            h-[50px] md:h-[65px]
            top-[5px] md:top-[8px]
            right-[5px] md:right-[8px]
            bg-blue-dark hover:bg-blue-light
            border-blue-dark hover:border-[2px]
            text-center
            text-white hover:text-blue-dark
            text-[25px] md:text-[33px]"
            href="/profile/"
        >
            {name}
        </Link>
    );
}
