import { clerkMiddleware, auth } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, request) => {
  const pathname = request.nextUrl.pathname;

  // Protected routes that require authentication
  const protectedRoutes = [
    '/dashboard',
    '/generate',
    '/edit',
  ];

  // Check if the current path is a protected route
  const isProtected = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  );

  // Use Clerk's built-in auth protection for protected routes
  if (isProtected) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};