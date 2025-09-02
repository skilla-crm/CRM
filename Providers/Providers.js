
'use client'
import s from './Providers.module.scss';
import { usePathname, useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies';
import { MenuContext } from "@/contexts/MenuContext";
import { useEffect, useState } from "react";

import Menu from "@/components/Menu/Menu";
import ProModal from '@/components/ProModal/ProModal';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;



export function Providers({ children }) {
    const router = useRouter()
    const cookies = useCookies();
    const token = cookies.get('token')
    const [activeCompanyId, setActiveCompanyId] = useState(0)


    const chekToken = () => {
        const getCookieDocument = () => {
            let cookie = document.cookie.split('; ').find(row => row.startsWith('token' + '='));
            return cookie ? cookie.split('=')[1] : null;
        }
        const cookieDocument = getCookieDocument().replace('%7C', '|')

        if (!cookieDocument) {
            router.push('https://lk.skilla.ru/login')
            return
        }

        if (cookieDocument && cookieDocument !== token) {
            router.push('https://lk.skilla.ru/')
            return
        }
    }

    /* useEffect(() => {
        document.addEventListener('visibilitychange', chekToken)

        return () => {
            document.removeEventListener('visibilitychange', chekToken)
        }
    }, []) */

    return (
        <>
            <ProModal />
            <Menu setActiveCompanyId={setActiveCompanyId} />
    

           

            <div id='container_provider' className={s.container}>
                <MenuContext.Provider value={{ activeCompanyId: activeCompanyId }}>
                    {children}
                </MenuContext.Provider>
            </div>
        </>
    );
}
