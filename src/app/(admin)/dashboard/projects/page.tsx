"use client"

import { Button } from "@/ui/Button";
import { ActionsButton, ActionsField, IdField, ProjectsHeader, Table, TableBody, TableContainer, TableFooter, TableHeader, TdField, TitleField } from "./styles";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/store/projectStore";
import { useEffect } from "react";
import { Pencil, Trash } from "phosphor-react";
import { Pagination } from "@/components/Pagination";

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

    return (
        <>
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

            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <IdField>ID</IdField>
                            <TitleField>Title</TitleField>
                            <ActionsField><div>Actions</div></ActionsField>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {
                            paginatedProjects.map((project) => {
                                return (
                                    <tr>
                                        <IdField>{project.id}</IdField>
                                        <TitleField>{project.title}</TitleField>
                                        <ActionsField>
                                            <div>
                                                <ActionsButton type="edit">
                                                    <Pencil size={16} />
                                                </ActionsButton>
                                                <ActionsButton type="delete">
                                                    <Trash size={16} />
                                                </ActionsButton>
                                            </div>
                                        </ActionsField>
                                    </tr>
                                    )
                                })
                            }
                    </TableBody>
                    <TableFooter>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <Pagination
                                    activePage={page}
                                    elementsCount={projects.length}
                                    elementsPerPage={perPage}
                                    changePage={changePage}
                                />
                            </td>
                        </tr>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}