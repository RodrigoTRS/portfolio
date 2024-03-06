"use client"

import { useProjectStore } from "@/store/projectStore"
import { Filters } from "./components/Filters"
import { EmptyProjectsContainer, ProjectsContainer, ProjectsGrid, ProjectsGridContainer } from "./styles"
import { ProjectCard } from "./components/ProjectCard"
import { Pagination } from "../../../components/Pagination"
import { useEffect } from "react"

export default function Projects() {

    const { projects, page, perPage, loadProjects, changePage } = useProjectStore(state => {
        return {
            projects: state.projects,
            page: state.page,
            perPage: state.perPage,
            loadProjects: state.loadProjects,
            changePage: state.changePage
        }
    })

    const paginatedProjects = projects.slice((page - 1) * perPage, page * perPage)


    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <>
            <ProjectsContainer>
                <ProjectsGridContainer>
                    <Filters />
                    <ProjectsGrid>
                        {
                            paginatedProjects.length !== 0 ?  (
                                paginatedProjects.map((project) => {
                                    return (
                                        <ProjectCard 
                                            project={project}
                                            key={project.id}
                                            />
                                            )
                                        })) :
                                        <EmptyProjectsContainer>
                                            <h2>No projects found</h2>
                                            <p>Try to filter for other categories.</p>
                                        </EmptyProjectsContainer>
                                    }
                    </ProjectsGrid>
                </ProjectsGridContainer>
            </ProjectsContainer>
            <Pagination
                activePage={page}
                elementsCount={projects.length}
                elementsPerPage={perPage}
                changePage={changePage}
            />
        </>
    )
}