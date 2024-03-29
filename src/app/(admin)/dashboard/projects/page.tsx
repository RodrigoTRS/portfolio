"use client"

import { Button } from "@/ui/Button";
import { ProjectsContainer, ProjectsHeader } from "./styles";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/store/projectStore";
import { useEffect, useState } from "react";
import { ActionsTable } from "../../components/ActionsTable";
import { Pagination } from "@/components/Pagination";
import * as Dialog from "@radix-ui/react-dialog";


export default function Projects() {

    const router = useRouter()

    const [ activePage, setActivePage ] = useState(1)

    const projectsPerPage = 4;

    const { projects, loadProjects, deleteProject } = useProjectStore(state => {
        return {
            projects: state.projects,
            loadProjects: state.loadProjects,
            deleteProject: state.deleteProject
        }
    })

    const needsPagination = (projects.length/projectsPerPage) > 1;

    const paginatedProjects =
        needsPagination
        ? projects.slice((activePage - 1) * projectsPerPage, activePage * projectsPerPage)
        : projects

    const headers = [
        { width: 400, title: "ID" },
        { title: "Project" }
    ]

    function changePage(page: number) {
        setActivePage(page)
    }
    
    useEffect(() => {
        loadProjects()
    }, [projects])

    return (
        <Dialog.Root>
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
                
                {needsPagination &&
                    <Pagination
                        activePage={activePage}
                        elementsCount={projects.length}
                        elementsPerPage={projectsPerPage}
                        changePage={changePage}
                    />
                }        
            </ProjectsContainer>
        </Dialog.Root>
    )
}