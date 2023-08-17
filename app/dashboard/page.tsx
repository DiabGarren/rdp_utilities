"use client"
import Header from "@/components/header";
import { useEffect } from "react";

export default function Dashboard() {
    useEffect(() => {
        if (!localStorage.getItem("userId")) {
            const win: Window = window;
            win.location = "/";
        }
    }, []);

    return (
        <div>
            <Header pageName="Dashboard" />
        </div>
    );
}
