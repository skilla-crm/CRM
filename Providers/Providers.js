
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
    const [activeCompanyId, setActiveCompanyId] = useState(0)

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
