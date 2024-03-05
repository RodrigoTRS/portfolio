import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, GetInTouchForm, ModalContainer, ModalDescription, ModalOverlay, ModalTitle, SubmitButton } from "./styles";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendCustomEmail } from "@/utils/sendMail";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";

const getInTouchFormSchema = z.object({
    email: z.string().email(),
    message: z.string()
});

type GetInFormData = z.infer<typeof getInTouchFormSchema>;

export function GetInTouchModal() {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<GetInFormData>({
        resolver: zodResolver(getInTouchFormSchema)
    })

    function handleGetInTouch(data: GetInFormData) {
        sendCustomEmail(data);
        reset();
    }

    return (
    <Dialog.Portal>
        <ModalContainer>
            <ModalTitle>Get in touch with me!</ModalTitle>
            <ModalDescription>This is a good place for you to drop a message if you want to <strong>know more about my jobs</strong>, or also if you want to <strong>hire a job.</strong></ModalDescription>
            <GetInTouchForm onSubmit={handleSubmit(handleGetInTouch)}>
                <Input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    {...register("email")}
                    />
                <Textarea
                    placeholder="Your message..."
                    {...register("message")}
                    />
                <SubmitButton
                    size="bg"
                    variant="primary"
                    type="submit"
                    >
                    Submit
                </SubmitButton>
            </GetInTouchForm>
            <Dialog.Trigger asChild>
                <CloseButton title="Close button">
                    <X size="20" weight="bold" />
                </CloseButton>
            </Dialog.Trigger>
        </ModalContainer>
        <ModalOverlay />
    </Dialog.Portal>
    )
}