import { cookies } from 'next/headers'
import Iframe2 from '@/components/Iframe2/Iframe2'


export const metadata = {
    title: "Отправить данные"
};

export default async function SendPassport() {
    const cookieStore = await cookies()
    const role = cookieStore.get('role')
    const id = 'root_sendpassport'

    return (
        <Iframe2 src={role?.value === 'director' ? process.env.REACT_APP_URL_PASSPORT : process.env.REACT_APP_URL_PASSPORT_BRIG} id={id} />
    );
}








