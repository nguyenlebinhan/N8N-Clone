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
import { authClient } from "@/lib/auth-client"
// import  {authClient} from "@/trpc/client/auth-client"

const registerSchema = z.object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(1,"Password is required"),
    confirmedPassword :z.string(),
})
.refine((data) => data.password === data.confirmedPassword,{
    message: "Passwords don't match",
    path: ["confirmedPassword"],
})

type registerFormValues = z.infer<typeof registerSchema>

export function RegisterForm(){
    const router = useRouter();
    const form = useForm<registerFormValues>({
        resolver : zodResolver(registerSchema),
        defaultValues:{
            email:"",
            password:"",
            confirmedPassword:"",
        }
    })
    const onSubmit = async(values: registerFormValues) =>{
        await authClient.signUp.email({
            name : values.email,
            email:values.email,
            password:values.password,
            callbackURL:"/"
        },
        {
            onSuccess: ()=>{
                router.push("/");
            },
            onError :(ctx)=>{
                toast.error(ctx.error.message);
            }
        }
        );
    }

    const isPending = form.formState.isSubmitting;

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Get Started
                    </CardTitle>
                    <CardDescription>
                        Create an account to continue
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
                                        <Image src="/logos/github.svg" alt="GitHub Logo" width={20} height={20} />
                                        Continue with GitHub
                                    </Button>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-full"
                                        disabled={isPending}
                                    >
                                        <Image src="/logos/google.svg" alt="Google Logo" width={20} height={20} />
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
                                                        placeholder="********"
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
                                        name="confirmedPassword"
                                        render= {({field})=>(
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="********"
                                                        {...field}
                                                    >
                                                    </Input>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />                                        
                                    <Button type="submit" className="w-full" disabled={isPending}>
                                        Sign up
                                    </Button>                               
                                </div>
                                <div className="text-center text-sm">
                                    Already have an account?{" "}
                                    <Link href="/login" className="underline underline-offset-4">Login</Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}