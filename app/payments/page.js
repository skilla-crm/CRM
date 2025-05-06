import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Iframe from '@/components/Iframe/Iframe'

export default async function Payments() {
    const src = process.env.REACT_APP_URL_BANK;
    const id = 'root_payments'
    const cookieStore = await cookies()
    const isBlocked = cookieStore.get('is_blocked')

    if (isBlocked?.value === '1') {
        redirect('/pay')
    }

    return (
        <Iframe src={src} id={id} />



    );
}








