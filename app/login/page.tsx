'use client';

import { signIn } from 'next-auth/react';


export default function LoginPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Login Page</h1>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign in with Google
        </button>
        {children}
      </div>
    </div>
  );
}

/*
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 
*/