"use client"

import { Button } from "@/ui/Button";
import { CreateProjectFooter, CreateProjectForm, CreateProjectHeader } from "./styles";
import { CaretLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import { Input } from "@/ui/Input";
import { DoubleColumns, InputWrapper, ShortContainer } from "../../styles";
import { Textarea } from "@/ui/Textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { useState } from "react";

const createProjectFormSchema = z.object({
    category: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.string(),
    repository_url: z.string(),
    project_url: z.string(),
})

type CreateProjectFormData = z.infer<typeof createProjectFormSchema>

export default function Create() {
    
    const router = useRouter()

    const { register, handleSubmit, reset, formState: {
        errors,
        isSubmitting
    }} = useForm<CreateProjectFormData>({
        resolver: zodResolver(createProjectFormSchema)
    })

    async function handleCreateNewProject(data: CreateProjectFormData) {
        const techArray = data.technologies.replace(" ", "").split(",");
        try {
            await api.post("/projects", {
                category: data.category,
                title: data.title,
                description: data.description,
                technologies: techArray,
                repository_url: data.repository_url,
                project_url: data.project_url,
            })
            reset();
            router.push("/dashboard/projects")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ShortContainer>
            <CreateProjectHeader>
                <h1>Create project</h1>
            </CreateProjectHeader>

            <CreateProjectForm onSubmit={handleSubmit(handleCreateNewProject)}>
                <DoubleColumns>
                    <InputWrapper>
                        <label>Category</label>
                        <Input
                            type="text"
                            {...register("category")}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label>Title</label>
                        <Input
                            type="text"
                            {...register("title")}
                        />
                    </InputWrapper>
                </DoubleColumns>
                <InputWrapper>
                    <label>Description</label>
                    <Textarea
                        {...register("description")}
                    />
                </InputWrapper>
                <DoubleColumns>
                    <InputWrapper>
                        <label>Repository URL</label>
                        <Input
                            type="text"
                            {...register("repository_url")}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label>Project URL</label>
                        <Input
                            type="text"
                            {...register("project_url")}
                        />
                    </InputWrapper>
                </DoubleColumns>
                <InputWrapper>
                    <label>Technologies (separed by commas)</label>
                    <Input
                        type="text"
                        {...register("technologies")}
                    />
                </InputWrapper>

                <CreateProjectFooter>
                    <Button
                        variant="secondary"
                        size="sm"
                        type="button"
                        onClick={() => router.push("/dashboard/projects")}
                    >
                        <CaretLeft size={16}/>
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        type="submit"
                    >
                        Create
                    </Button>
                </CreateProjectFooter>
            </CreateProjectForm>
        </ShortContainer>
    )
}