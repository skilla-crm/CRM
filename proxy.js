import { NextResponse } from 'next/server'

const publicRoutes = ['/login']
const partnerRoles = ['director', 'accountant', 'supervisor', 'operator']

export default async function proxy(req) {
    const token = req.cookies.get('token')
    const role = req.cookies.get('role')
    const isBlocked = req.cookies.get('is_blocked')
    const path = req.nextUrl.pathname
    const isProtectedRoute = !publicRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (isBlocked?.value === '1') {
        return NextResponse.redirect(new URL('/pay', req.nextUrl))
    }

    /*  if (!partnerRoles.includes(role?.value)) {
         return NextResponse.redirect(new URL('/team', req.nextUrl))
     } */

    if (
        isPublicRoute &&
        token &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}