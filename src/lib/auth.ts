import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import {checkout,polar,portal} from "@polar-sh/better-auth";
import { polarClient } from "./polar";
export const auth = betterAuth({
    database :prismaAdapter(prisma,{
        provider:"sqlserver",
    }),
    emailAndPassword:{
        enabled:true,
        autoSignIn:true,
    },
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "18831113-f381-4e87-af21-65c576c163a9",
                            slug: "pro" // Custom slug for easy reference in Checkout URL, e.g. /checkout/Nodebase-Pro
                        }
                    ],
                    successUrl: process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly: true
                }),
                portal()
            ],
        })
    ]
});