'use server'
import { cookies } from 'next/headers'

export async function create() {

    const cookieStore = await cookies()
    cookieStore.set('token', "Bearer 2109|7d9OHVhjO02gY9rrbjV5rTfCpFs4iVShk6TtSrCg")
    cookieStore.set('role', "director")
    cookieStore.set('ispro', "1")
}