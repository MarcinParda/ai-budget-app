import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { cockpitRoutes } from '@ai-budget-app/shared/util-shared-routes/src';

export async function middleware(request: NextRequest) {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const isLoginPage = request.nextUrl.pathname === cockpitRoutes.login.path;

  if (session && isLoginPage) {
    return NextResponse.redirect(
      new URL(cockpitRoutes.projects.path, request.url)
    );
  }

  if (!session && !isLoginPage) {
    return NextResponse.redirect(
      new URL(cockpitRoutes.login.path, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
