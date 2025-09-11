'use server'
import { cookies } from 'next/headers'
/* 350|AzgciLV9wnUGymn4vpCMuG8gGWJRtcvEHfZuNgi7 accountant*/
/* 17|ZLcO2bSQBbExVhlHVsPq6onXF441I4lU2WpHZTGo */
export async function create() {
    const cookieStore = await cookies()
    cookieStore.set('token', "2109|7d9OHVhjO02gY9rrbjV5rTfCpFs4iVShk6TtSrCg")
    cookieStore.set('role', "director")
    cookieStore.set('avatar_mini', "")
    cookieStore.set('name', "%D0%98%D0%B3%D0%BE%D1%80%D1%8C+")
    cookieStore.set('partnership_name', "%D0%9E%D0%9E%D0%9E+%C2%AB%D0%A2%D0%95%D0%A1%D0%A2%D0%9E%D0%92%D0%90%D0%AF+%D0%9A%D0%9E%D0%9C%D0%9F%D0%90%D0%9D%D0%98%D0%AF%C2%BB")
    cookieStore.set('date', "2025-05-05")
    cookieStore.set('brand', "1")
    cookieStore.set('is_pro', "1")
    cookieStore.set('is_blocked', "0")
    cookieStore.set('partnership_id', "17")
}