'use server'
import { cookies } from 'next/headers'

export async function create() {
    const cookieStore = await cookies()
    cookieStore.set('token', "350|AzgciLV9wnUGymn4vpCMuG8gGWJRtcvEHfZuNgi7")
    cookieStore.set('role', "director")
    cookieStore.set('ispro', "1")
    cookieStore.set('avatar_mini', "7648_mini.jpg")
    cookieStore.set('name', "%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80")
    cookieStore.set('date', "2025-05-05")
    cookieStore.set('brand', "0")
}