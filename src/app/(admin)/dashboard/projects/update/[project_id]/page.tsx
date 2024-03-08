"use client"

import { ShortContainer } from "../../../styles";
import { ProjectFormData, ProjectForm } from "../../components/Form";
import { useParams, useRouter } from "next/navigation";
import { ProjectsHeader } from "../../styles";
import { z } from "zod";

const updateProjectPramsSchema = z.object({
    project_id: z.string()
})

export default function Update() {

    const router = useRouter();

    async function handleUpdateProject(data: ProjectFormData) {
        router.push("/dashboard/projects")
    }

    const params = useParams<{project_id: string}>()
    const { project_id } = updateProjectPramsSchema.parse(params)

    return (
        <ShortContainer>
            <ProjectsHeader>
                <h1>Update project</h1>
            </ProjectsHeader>

            <ProjectForm
                onSubmit={handleUpdateProject}
                onCancelPath="/projects"
                populate={project_id}
            />
        </ShortContainer>
    )
}