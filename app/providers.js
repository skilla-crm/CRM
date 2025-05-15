

'use client'
import s from './layout.module.scss';
import useSWR from 'swr'
import { usePathname, useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies';
import { MenuContext } from "@/contexts/MenuContext";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu/Menu";
import { fetchWithToken } from '@/app/api/api';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export function Providers({ children }) {
    const router = useRouter()
    const cookies = useCookies();
    const token = cookies.get('token')
    const activeCompanyId = cookies.get('active-company')
    const { data: menuData, isLoading } = useSWR(`${baseURL}menu`, url => fetchWithToken(url, token))
    const [activeCompany, setActiveCompany] = useState({});

    const chekToken = () => {
        const getCookieDocument = () => {
            let cookie = document.cookie.split('; ').find(row => row.startsWith('token' + '='));
            return cookie ? cookie.split('=')[1] : null;
        }
        const cookieDocument = getCookieDocument().replace('%7C', '|')
        console.log(cookieDocument, token, cookieDocument === token)

        if (!cookieDocument) {
            router.push('https://lk.skilla.ru/login')
            return
        }

        if (cookieDocument && cookieDocument !== token) {
            router.push('https://lk.skilla.ru/')
            return
        }
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', chekToken)

        return () => {
            document.removeEventListener('visibilitychange', chekToken)
        }

    }, [])

    /*   useEffect(() => {
          const active = menuData?.partnerships_connect_to?.find(el => el.id == activeCompanyId)
          active && setActiveCompany(active)
      }, [activeCompanyId, menuData]) */

    return (
        <>
            <Menu
                menuData={menuData}
                isLoading={isLoading}
                activeCompany={activeCompany}
                setActiveCompany={setActiveCompany}
            />
            <div className={s.container}>
                <MenuContext.Provider value={{ activeCompanyId: activeCompany?.id ? activeCompany.id : '' }}>
                    {children}
                </MenuContext.Provider>
            </div>
        </>
    );
}