import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CreateProjectFooter, ProjectFormContainer } from "./styles"
import { Button } from "@/ui/Button"
import { CaretLeft } from "phosphor-react"
import { DoubleColumns, InputWrapper } from "../../../styles"
import { Input } from "@/ui/Input"
import { Textarea } from "@/ui/Textarea"
import { useRouter } from "next/navigation"

const createProjectFormSchema = z.object({
    category: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.string(),
    repository_url: z.string(),
    project_url: z.string(),
})

export type CreateProjectFormData = z.infer<typeof createProjectFormSchema>

interface ProjectFormProps {
    onSubmit: (data: CreateProjectFormData) => void;
    onCancelPath: string; 
}

export function ProjectForm({ onSubmit, onCancelPath }: ProjectFormProps) {

    const router = useRouter()

    const { register, handleSubmit, reset, formState: {
        isSubmitting
    }} = useForm<CreateProjectFormData>({
        resolver: zodResolver(createProjectFormSchema)
    })

    function handleFormSubmit(data: CreateProjectFormData) {
        onSubmit(data)
        reset();
    }

    return (
        <ProjectFormContainer onSubmit={handleSubmit(handleFormSubmit)}>
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
                    onClick={() => router.push(onCancelPath)}
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
        </ProjectFormContainer>
    )
}