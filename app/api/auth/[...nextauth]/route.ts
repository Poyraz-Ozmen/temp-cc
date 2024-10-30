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
    callbacks: {
        async signIn({ user, account, profile }) {
            // Check if the email ends with @i2i-systems.com
            return user?.email?.endsWith("@i2i-systems.com") ?? false;
        },
        async jwt({ token, trigger, session }) {
            return token;
        },
        async session({ session, token }) {
            return session;
        },
    },
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth } = NextAuth(config)