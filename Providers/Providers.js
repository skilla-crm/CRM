
'use client'
import s from './Providers.module.scss';
import useSWR from 'swr'
import { usePathname, useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies';
import { MenuContext } from "@/contexts/MenuContext";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu/Menu";
import ProModal from '@/components/ProModal/ProModal';
import { fetchWithToken } from '@/api/api';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export function Providers({ children }) {
    const router = useRouter()
    const cookies = useCookies();
    const token = cookies.get('token')
    const activeCompanyId = cookies.get('active-company')
    const activeCompanyName = cookies.get('activeCompanyName')
    const { data: menuData, isLoading, mutate } = useSWR(`${baseURL}menu`, url => fetchWithToken(url, token), { refreshInterval: 0 })
    const [activeCompany, setActiveCompany] = useState({});


    useEffect(() => {
        if (activeCompanyName) {
            setActiveCompany(JSON.parse(activeCompanyName))
            return
        }

    }, [activeCompanyName])

    useEffect(() => {
        mutate()
    }, [token])

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

    useEffect(() => {
        document.addEventListener('visibilitychange', chekToken)
 
        return () => {
            document.removeEventListener('visibilitychange', chekToken)
        }
 
    }, [])

    return (
        <>
            <ProModal />
            <Menu
                menuData={menuData}
                isLoading={isLoading}
                activeCompany={activeCompany}
                setActiveCompany={setActiveCompany}
            />
            <div className={s.container}>
                <MenuContext.Provider value={{ activeCompanyId: activeCompany?.id ? activeCompany.id : 0 }}>
                    {children}
                </MenuContext.Provider>
            </div>
        </>
    );
}