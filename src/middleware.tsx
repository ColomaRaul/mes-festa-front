import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    //TODO: create a nested conditions with jsonwebdecode with the valid roles
    //TODO: but I need in all pages the roles for show or not components
    const accessToken = request.cookies.get('access_token')?.value;
    if (accessToken === undefined) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';

        return NextResponse.redirect(url);
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/organization/:path*',
    ],
}