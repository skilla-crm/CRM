import { NextResponse } from "next/server";
const protectedRoutes = [
    "/orders",
    "/workers",
    "/payments",
    "/purchases",
    "/company-results",
    "/counterparties",
    "/dashboard",
    "/notifications",
    "/results",
    "/settings",
    "/stock",
    "/worker"
];


export default function middleware(req) {
    const isBlocked = req.cookies.get('is_blocked')
    const token = req.cookies.get('token')
    const role = req.cookies.get('role')
    console.log(req.nextUrl.pathname)

    if (!token) {
        return NextResponse.redirect("https://lk.skilla.ru/login");
    }

    /*  if (token && role.value === 'accountant') {
         return NextResponse.redirect("https://lk.skilla.ru/new/orders");
     }
 
     if (token && role.value === 'director') {
         return NextResponse.redirect("https://lk.skilla.ru/new/dashboard");
     } */

    if (role.value !== 'director' && role.value !== 'accountant') {
        return NextResponse.redirect("https://lk.skilla.ru")
    }

    if (isBlocked?.value === '1' && protectedRoutes.some(el => req.nextUrl.pathname.includes(el))) {
        return NextResponse.redirect(new URL("/new/pay", req.url));
    }
}

