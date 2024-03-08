"use client"

import { CreateProjectHeader } from "./styles";
import { ShortContainer } from "../../styles";
import { CreateProjectFormData, ProjectForm } from "../components/Form";
import { useProjectStore } from "@/store/projectStore";
import { useRouter } from "next/navigation";


export default function Create() {

    const router = useRouter();

    const { createProject } = useProjectStore(state => {
        return {
            createProject: state.createProject
        }
    })

    async function handleCreateNewProject(data: CreateProjectFormData) {
        createProject(data);
        router.push("/dashboard/projects")

    }

    return (
        <ShortContainer>
            <CreateProjectHeader>
                <h1>Create project</h1>
            </CreateProjectHeader>

            <ProjectForm
                onSubmit={handleCreateNewProject}
                onCancelPath="/projects"
            />
        </ShortContainer>
    )
}