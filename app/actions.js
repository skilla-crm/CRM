'use server'
import { cookies } from 'next/headers'

export async function create() {

    const cookieStore = await cookies()
    cookieStore.set('token', "350|AzgciLV9wnUGymn4vpCMuG8gGWJRtcvEHfZuNgi7")
    cookieStore.set('role', "director")
    cookieStore.set('ispro', "1")
}