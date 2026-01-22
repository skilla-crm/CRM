import { NextResponse } from "next/server";
export const testTokens = ['17', '200', '1001', '443', '1076', '1036', '1336', '1322', '1327', '127', '1083', '1122', '1335', '8']


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
    const partnership_id = req.cookies.get('partnership_id')
    const role = req.cookies.get('role')

    /* if (!token) {
        return NextResponse.redirect("https://lk.skilla.ru/login");
    }

    if (role.value !== 'director' && role.value !== 'accountant' && role.value !== 'supervisor' && role.value !== 'operator') {
        return NextResponse.redirect("https://lk.skilla.ru")
    }

    if (isBlocked?.value === '1' && protectedRoutes.some(el => req.nextUrl.pathname.includes(el))) {
        return NextResponse.redirect("https://lk.skilla.ru/new/pay");
    } */
}

