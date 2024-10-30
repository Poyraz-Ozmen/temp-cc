import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  /*
  const session = await getToken({
    req: request,
    secureCookie: process.env.NODE_ENV === 'production',
    secret: process.env.NEXTAUTH_SECRET,
  });
  */
  /*
  if (!session?.user && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }*/

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard', '/users', '/settings'],
};