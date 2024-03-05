"use client"

import { useParams } from "next/navigation"
import { useState } from "react";
import { z } from "zod";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: "Front-end" | "Back-end" | "Full stack";
    created_at: Date;
    repository_url: string;
    project_url: string;
}

const projectPagePramsSchema = z.object({
    project_id: z.string()
})

export default function ProjectPage() {

    const [project, setProject] = useState<Project | null>(null)

    const params = useParams<{project_id: string}>()
    const { project_id } = projectPagePramsSchema.parse(params)

    return (
        <h1>{project_id}</h1>
    )
}
