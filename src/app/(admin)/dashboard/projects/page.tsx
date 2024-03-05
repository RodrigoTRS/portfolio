"use client"

import { Button } from "@/ui/Button";
import { ProjectsHeader } from "./styles";
import { useRouter } from "next/navigation";

export default function Projects() {

    const router = useRouter()

    return (
        <ProjectsHeader>
            <h1>Projects</h1>
            <Button
                variant="primary"
                size="sm"
                onClick={() => router.push("/dashboard/projects/create")}
            >
                Create project
            </Button>
        </ProjectsHeader>
    )
}