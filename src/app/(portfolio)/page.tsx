"use client"

import { Button } from "@/ui/Button";
import { ActionsWrapper, HomeContent } from "./styles";
import { DownloadSimple } from "phosphor-react";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter()

    return (
        <HomeContent>
            <h1>👋 Welcome to my portfolio!</h1>
            <p>My name is Rodrigo Teixeira and I'm a Web Developer from Brasil. 🇧🇷</p>
            <ActionsWrapper>
                <Button
                    size="sm"
                    variant="secondary"
                    type="button"
                    onClick={() => router.push("/curriculum")}
                    >
                    My resume
                </Button>
                <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => router.push("/projects")}
                >
                    Portfolio
                </Button>
            </ActionsWrapper>
        </HomeContent>
    )
}