"use client"

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";

import { CaretLeft } from "phosphor-react";
import { InputWrapper, ShortContainer } from "../../styles";

import { useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { api } from "@/lib/axios";
import { CreateLanguageForm, CreateLanguageHeader } from "./styles";
import { CreateProjectFooter } from "../../projects/create/styles";

const createLanguageFormSchema = z.object({
    title: z.string(),
    level: z.string()
})

type CreateLanguageFormData = z.infer<typeof createLanguageFormSchema>

export default function Create() {
    
    const router = useRouter()

    const { register, handleSubmit, reset, formState: {
        isSubmitting
    }} = useForm<CreateLanguageFormData>({
        resolver: zodResolver(createLanguageFormSchema)
    })

    async function handleCreateNewProject(data: CreateLanguageFormData) {
        try {
            await api.post("/languages", {
                title: data.title,
                level: data.level,
            })
            reset();
            router.push("/dashboard/languages")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ShortContainer>
            <CreateLanguageHeader>
                <h1>Create language</h1>
            </CreateLanguageHeader>

            <CreateLanguageForm onSubmit={handleSubmit(handleCreateNewProject)}>
                    <InputWrapper>
                        <label>Language</label>
                        <Input
                            type="text"
                            {...register("title")}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label>Level</label>
                        <Input
                            type="text"
                            {...register("level")}
                        />
                    </InputWrapper>
                <CreateProjectFooter>
                    <Button
                        variant="secondary"
                        size="sm"
                        type="button"
                        onClick={() => router.push("/dashboard/languages")}
                    >
                        <CaretLeft size={16}/>
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Create
                    </Button>
                </CreateProjectFooter>
            </CreateLanguageForm>
        </ShortContainer>
    )
}