"use client"

import { useProjectStore } from "@/store/projectStore"
import { Filters } from "./components/Filters"
import {  ProjectsContainer, ProjectsGrid } from "./styles"
import { ProjectCard } from "./components/ProjectCard"
import { Pagination } from "./components/Pagination"
import { ProjectsEmpty } from "./components/ProjectsEmpty"

export default function Projects() {

    const { projects, page, perPage } = useProjectStore(state => {
        return {
            projects: state.projects,
            page: state.page,
            perPage: state.perPage
        }

    })
    
    const paginatedProjects = projects.slice((page - 1) * perPage, page * perPage)

    return (
        <>
            <ProjectsContainer>
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
                        })) : <ProjectsEmpty />
                    }
                </ProjectsGrid>
            </ProjectsContainer>
            <Pagination />
        </>
    )
}