import { NextResponse } from "next/server";
export const testTokens = ['17', '200', '1001', '1076', '443', '1036', '1322', '1327', '1083', '8']


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

const routesSupervisor = []


export default function middleware(req) {
    const isBlocked = req.cookies.get('is_blocked')
    const token = req.cookies.get('token')
    const partnership_id = req.cookies.get('partnership_id')
    const role = req.cookies.get('role')
    const test = testTokens?.includes(partnership_id)
    const testBrig = testTokens?.includes('17')

    if (!token) {
        return NextResponse.redirect("https://lk.skilla.ru/login");
    }

    if (role.value !== 'director' && role.value !== 'accountant' && !test && !testBrig) {
        return NextResponse.redirect("https://lk.skilla.ru")
    }

  /*   if (role.value !== 'director' && role.value !== 'accountant' && role.value !== 'supervisor' && testBrig) {
        return NextResponse.redirect("https://lk.skilla.ru")
    } */

    if (isBlocked?.value === '1' && protectedRoutes.some(el => req.nextUrl.pathname.includes(el))) {
        return NextResponse.redirect(new URL("/new/pay", req.url));
    }
}

