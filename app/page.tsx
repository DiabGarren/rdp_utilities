"use client";
import Header from "@/components/header";
import { useState } from "react";

export default function Home() {
    const [user, setUser] = useState({});
    let warning;

    if (localStorage.getItem("userId")) {
        window.location = "/dashboard";
    }

    return (
        <div>
            <Header pageName="Login" />
            <main
                className="flex 
            flex-col
            md:max-w-[350px]
            "
            >
                <h3>{warning}</h3>
                <label>Username/Email</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button className="btn-blue">Login</button>
                <div>
                    <p className="inline">Don&apos;t have an account?</p>
                    <button className="text-blue-dark hover:text-blue-light hover:bg-blue-dark">Register</button>
                </div>
            </main>
        </div>
    );
}
