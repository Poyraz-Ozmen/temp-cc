'use client';

import { signIn } from 'next-auth/react';
import Image from "next/image"

export default function LoginPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Logo Container */}
      <div className="w-full max-w-[400px] flex flex-col items-center mb-8">
        <Image
          src="/i2i-logo.png"  // Make sure to add your logo in public folder
          alt="i2i Systems Logo"
          width={150}
          height={50}
          className="dark:invert"
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-[400px] bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Sign in to access your dashboard
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors duration-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Continue with Google
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Only @i2i-systems.com email addresses are allowed
          </p>
        </div>
        
        {children}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 i2i Systems. All rights reserved.</p>
      </div>
    </div>
  );
}