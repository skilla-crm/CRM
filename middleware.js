import { NextResponse } from "next/server";
export const testTokens = ['2109|7d9OHVhjO02gY9rrbjV5rTfCpFs4iVShk6TtSrCg', '17|ZLcO2bSQBbExVhlHVsPq6onXF441I4lU2WpHZTGo', '285|uAvDwNOyod4MzdFBTr0sEEkAQLQsuV9gdCa3sP4o']


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
    console.log(req.nextUrl.pathname, token, testTokens)
    const test = testTokens.includes(token.value.replace('%7C', '|'))
    console.log(test)

    if (!token) {
        return NextResponse.redirect("https://lk.skilla.ru/login");
    }

    if (role.value !== 'director' && role.value !== 'accountant') {
        return NextResponse.redirect("https://lk.skilla.ru")
    }

    if (role.value === 'accountant' && !test) {
        return NextResponse.redirect("https://lk.skilla.ru/accountant")
    }

    if (isBlocked?.value === '1' && protectedRoutes.some(el => req.nextUrl.pathname.includes(el))) {
        return NextResponse.redirect(new URL("/new/pay", req.url));
    }
}

