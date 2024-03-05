"use client"

import { Button } from "@/ui/Button";
import { CreateProjectFooter, CreateProjectForm, CreateProjectHeader } from "./styles";
import { CaretLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import { Input } from "@/ui/Input";
import { DoubleColumns, FileInput, InputWrapper, ShortContainer, SubmitFileButton } from "../../styles";
import { Textarea } from "@/ui/Textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { useState } from "react";

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const createProjectFormSchema = z.object({
    category: z.string(),
    cover_image: z.any()
        .refine((files) => {
        return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `Max image size is 5MB.`)
        .refine(
        (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
    title: z.string(),
    description: z.string(),
    technologies: z.string(),
    repository_url: z.string(),
    project_url: z.string(),
})

type CreateProjectFormData = z.infer<typeof createProjectFormSchema>

export default function Create() {
    
    const [selectedImage, setSelectedImage] = useState< File | null >(null);


    const router = useRouter()

    const { register, handleSubmit, reset, formState: {
        errors,
        isSubmitting
    }} = useForm<CreateProjectFormData>({
        resolver: zodResolver(createProjectFormSchema)
    })

    async function handleCreateNewProject(data: CreateProjectFormData) {
        const techArray = data.technologies.split(",");
        console.log(data)
        // try {
        //     await api.post("/projects", {
        //         category: data.category,
        //         cover_image: data.cover_image,
        //         title: data.title,
        //         description: data.description,
        //         technologies: techArray,
        //         repository_url: data.repository_url,
        //         project_url: data.project_url,
        //     })
        //     reset();
        // } catch (err) {
        //     console.log(err)
        // }
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
                <InputWrapper>
                    <SubmitFileButton htmlFor="file">Upload cover image</SubmitFileButton>
                    <FileInput
                        type="file"
                        id="file"
                        {...register("cover_image")}
                        onChange={(e) => {
                            setSelectedImage(e.target.files?.[0] || null);
                        }}
                    />
                </InputWrapper>

                <CreateProjectFooter>
                    <Button
                        variant="secondary"
                        size="sm"
                        type="submit"
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