/*
import { handlers } from "@/auth"
export const { GET, POST } = handlers
*/

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { type NextAuthConfig } from "next-auth"

export const config = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth } = NextAuth(config)