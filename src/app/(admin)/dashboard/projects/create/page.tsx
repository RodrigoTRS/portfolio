"use client"

import { ShortContainer } from "../../styles";
import { ProjectFormData, ProjectForm } from "../components/Form";
import { useProjectStore } from "@/store/projectStore";
import { useRouter } from "next/navigation";
import { ProjectsHeader } from "../styles";


export default function Create() {

    const router = useRouter();

    const { createProject } = useProjectStore(state => {
        return {
            createProject: state.createProject
        }
    })

    async function handleCreateNewProject(data: ProjectFormData) {
        createProject(data);
        router.push("/dashboard/projects")

    }

    return (
        <ShortContainer>
            <ProjectsHeader>
                <h1>Create project</h1>
            </ProjectsHeader>

            <ProjectForm
                onSubmit={handleCreateNewProject}
                onCancelPath="/dashboard/projects"
            />
        </ShortContainer>
    )
}