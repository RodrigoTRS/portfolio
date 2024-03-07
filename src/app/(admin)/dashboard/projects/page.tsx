"use client"

import { Button } from "@/ui/Button";
import { ProjectsContainer, ProjectsHeader } from "./styles";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/store/projectStore";
import { useEffect } from "react";
import { ActionsTable } from "../../components/ActionsTable";


export default function Projects() {

    const router = useRouter()

    const { page, perPage, projects, loadProjects, changePage } = useProjectStore(state => {
        return {
            page: state.page,
            perPage: state.perPage,
            projects: state.projects,
            loadProjects: state.loadProjects,
            changePage: state.changePage,
        }
    })

    const paginatedProjects = projects.slice((page - 1) * perPage, page * perPage)

    useEffect(() => {
        loadProjects()
    }, [])

    const headers = [
        { width: 400, title: "ID" },
        { title: "Project" }
    ]


    return (
        <ProjectsContainer>
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
            <ActionsTable
                headers={headers}
                rows={paginatedProjects.map((project) => {
                    return [project.id, project.title]
                })}
            />            
        </ProjectsContainer>
    )
}