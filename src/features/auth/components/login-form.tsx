"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
}from "@/components/ui/form"
import  {Input} from "@/components/ui/input"
import {cn} from "@/lib/utils"
import {Card, CardContent, CardDescription, CardHeader,CardTitle} from "@/components/ui/card"
// import  {authClient} from "@/trpc/client/auth-client"

const loginSchema = z.object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(1,"Password is required"),
})

type loginFormValues = z.infer<typeof loginSchema>

export function LoginForm(){
    const router = useRouter();
    const form = useForm({
        resolver : zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password:"",
        }
    })
    const onSubmit = async(values: loginFormValues) =>{
        console.log(values);
    }

    const isPending = form.formState.isSubmitting;

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Welcome back
                    </CardTitle>
                    <CardDescription>
                        Please sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} >
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-full"
                                        disabled={isPending}
                                    >
                                        Continue with GitHub
                                    </Button>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-full"
                                        disabled={isPending}
                                    >
                                        Continue with Google
                                    </Button>
                                </div>
                                <div className="grid gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render= {({field})=>(
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="m@example.com"
                                                        {...field}
                                                    >
                                                    </Input>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render= {({field})=>(
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="••••••••"
                                                        {...field}
                                                    >
                                                    </Input>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />                                 
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}