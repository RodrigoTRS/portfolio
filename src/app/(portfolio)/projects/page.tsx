"use client"

import { useProjectStore } from "@/store/projectStore"
import { Filters } from "./components/Filters"
import { EmptyProjectsContainer, ProjectsContainer, ProjectsGrid, ProjectsGridContainer } from "./styles"
import { ProjectCard } from "./components/ProjectCard"
import { Pagination } from "../../../components/Pagination"
import { useEffect, useState } from "react"

export default function Projects() {

    const [ activePage, setActivePage ] = useState(1)

    const projectsPerPage = 4;

    const { filter, projects, loadProjects } = useProjectStore(state => {
        return {
            filter: state.filter,
            projects: state.projects,
            loadProjects: state.loadProjects,
        }
    })

    const filteredProjects = projects.filter((item) => {
        if (filter.length === 0) {
            return true
        } else {
            return filter.includes(item.category)
        }
    })

    function changePage(page: number) {
        setActivePage(page)
    }

    const needsPagination = (filteredProjects.length/projectsPerPage) > 1;

    const paginatedProjects =
        needsPagination
        ? filteredProjects.slice((activePage - 1) * projectsPerPage, activePage * projectsPerPage)
        : filteredProjects

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
                            paginatedProjects.length !== 0
                            ? (
                                paginatedProjects.map((project) => {
                                    return (
                                        <ProjectCard 
                                            project={project}
                                            key={project.id}
                                        />
                                    )
                                })
                            )
                            : (
                                <EmptyProjectsContainer>
                                    <h2>No projects found</h2>
                                    <p>Try to filter for other categories.</p>
                                </EmptyProjectsContainer>
                            )
                        }
                    </ProjectsGrid>
                </ProjectsGridContainer>
                {needsPagination &&
                    <Pagination
                        activePage={activePage}
                        elementsCount={projects.length}
                        elementsPerPage={projectsPerPage}
                        changePage={changePage}
                    />
                }
            </ProjectsContainer>
        </>
    )
}