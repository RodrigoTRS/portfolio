"use client"

import { Box } from "@/ui/Box";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { LoginForm } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {

    const router = useRouter()

    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    function handleLogin(data: LoginFormData) {
        console.log(data);
        router.push("/dashboard")
        reset()
    }

    return (
        <LoginForm onSubmit={handleSubmit(handleLogin)}>
            <Box>
                <label>E-mail</label>
                <Input
                    type="email"
                    {...register("email")}
                />
                <label>Password</label>
                <Input
                    type="password"
                    {...register("password")}
                />
                <Button
                    size="bg"
                    variant="primary"
                    disabled={ isSubmitting }
                    >
                    Login
                </Button>
            </Box>
        </LoginForm>
    )
}