"use client"

import { api } from "@/lib/axios";
import { Box } from "@/ui/Box";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { z } from "zod";
import { ProjectsContainer } from "../styles";
import { Button } from "@/ui/Button";
import { CalendarBlank, CaretLeft, GithubLogo } from "phosphor-react";
import { CategoryTag, DateContainer, ProjectHeader, ProjectPageBottomBar, ProjectPageContainer, ProjectPageTopBar, TechnologiesWrapper, TechnologyTag } from "./styles";
import { Anchor } from "@/ui/Anchor";
import { formatDate } from "@/utils/formatDate";
import { Loader } from "@/components/Loader";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    created_at: Date;
    repository_url: string;
    project_url: string;
}

const projectPagePramsSchema = z.object({
    project_id: z.string()
})

export default function ProjectPage() {

    const [project, setProject] = useState<Project | null>(null)

    const router = useRouter()

    const params = useParams<{project_id: string}>()
    const { project_id } = projectPagePramsSchema.parse(params)

    async function fetchProject(id: string) {
        await api
        .get(`/projects/${project_id}`)
        .then((response) => setProject(response.data.project))
    }

    useEffect(() => {
        setTimeout(() => {
            fetchProject(project_id)
        }, 500)
    }, [])

    useEffect(() => {
        console.log(project)
    }, [project])

    return (
        <ProjectsContainer>
            <ProjectPageContainer>
                {project ?
                    <>
                        <ProjectPageTopBar>
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={() => router.push("/projects")}
                                >
                                <CaretLeft size={16} />
                                Back to projects
                            </Button>
                        </ProjectPageTopBar>

                        <Box>
                            <ProjectHeader>
                                <CategoryTag>
                                    {project.category}
                                </CategoryTag>
                                <DateContainer>
                                    <CalendarBlank size={16} weight="bold" />
                                    {formatDate(project.created_at)}
                                </DateContainer>
                            </ProjectHeader>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <TechnologiesWrapper>
                                { project.technologies.map((item) => {
                                    return (
                                        <TechnologyTag>
                                            {item}
                                        </TechnologyTag>
                                    )
                                })}
                            </TechnologiesWrapper>
                        </Box>

                        <ProjectPageBottomBar>
                            <Anchor
                                size="bg"
                                variant="secondary"
                                href={project.repository_url}
                            >
                                <GithubLogo size={16} />

                                Github
                            </Anchor>

                            <Anchor
                                size="bg"
                                variant="primary"
                                href={project.project_url}
                                >
                                View live
                            </Anchor>
                        </ProjectPageBottomBar>
                    </> :
                    <>
                        <Loader />
                    </>
                }
            </ProjectPageContainer>
        </ProjectsContainer>
    )
}
