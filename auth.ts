/*
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Google from "next-auth/providers/google";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const userEmail = profile?.email;
        const allowedDomain = process.env.ALLOWED_EMAIL_DOMAIN;
        
        return userEmail?.endsWith(`@${allowedDomain}`) ?? false;
      }
      return false;
    },
  },
});
*/


import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
})