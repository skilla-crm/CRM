'use client'
import s from './layout.module.scss';
import useSWR from 'swr'
import { useCookies } from 'next-client-cookies';
import { MenuContext } from "@/contexts/MenuContext";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu/Menu";
import { fetchWithToken } from '@/app/api/api';
const urlMenu = `https://api2.skilla.ru/api/menu`

export function Providers({ children }) {
    const cookies = useCookies();
    const token = cookies.get('token')
    const activeCompanyId = cookies.get('active-company')
    const { data: menuData, isLoading } = useSWR(urlMenu, url => fetchWithToken(url, token))
    const [activeCompany, setActiveCompany] = useState({});
    console.log(activeCompanyId)

    useEffect(() => {
        const active = menuData?.partnerships_connect_to?.find(el => el.id == activeCompanyId)
        active ? setActiveCompany(active) : setActiveCompany(menuData?.partnership)
    }, [activeCompanyId, menuData])

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