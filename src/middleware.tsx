import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
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
        '/assistance/:path*',
        '/calendar/:path*',
        '/documentation/:path*',
        '/home/:path*',
        '/notifications/:path*',
        '/personal-page/:path*',
        '/transactions/:path*',
    ],
}