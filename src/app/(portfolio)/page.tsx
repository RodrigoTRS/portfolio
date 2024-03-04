"use client"

import { Button } from "@/ui/Button";
import { ActionsWrapper, HomeContent } from "./styles";
import { DownloadSimple } from "phosphor-react";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter()

    function handleNavigateToProjects() {
        router.push("/projects");
    }

    return (
        <HomeContent>
            <h1>👋 Welcome to my portfolio!</h1>
            <p>My name is Rodrigo Teixeira and I'm a Web Developer from Brasil. 🇧🇷</p>
            <ActionsWrapper>
                <a 
                    href="../../assets/curriculum-rodrigo-trs.pdf"
                    download
                > 
                    <Button
                        size="sm"
                        variant="secondary"
                        type="button"
                        >
                        <DownloadSimple size={16} />
                        My resume
                    </Button>
                </a>
                <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleNavigateToProjects}
                >
                    Portfolio
                </Button>
            </ActionsWrapper>
        </HomeContent>
    )
}