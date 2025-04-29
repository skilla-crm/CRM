'use client'
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr'
import { useCookies } from 'next-client-cookies';
import { Scrollbar } from 'react-scrollbars-custom';
import { create } from '@/app/actions';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import classNames from 'classnames';
import s from './Menu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cat from '@/public/images/cat.jpg';
import logo from '@/public/images/skilla.png';
import ProfileLogo from '@/public/icons/profileLogo.svg';
import IconLightning from '@/public/icons/iconLightning.svg';
import Arrow from '@/public/icons/menu/arrow.svg';
import { menuItem } from '@/constants/menu';
//components
import FunctionBlock from '../FunctionBlock/FunctionBlock';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
import { fetchWithToken } from '@/app/api/api';
const urlMenu = `https://api2.skilla.ru/api/menu`

const Menu = () => {
    const router = useRouter()
    const cookies = useCookies();
    const token = cookies.get('token')
    const { data: menuData } = useSWR(urlMenu, url => fetchWithToken(url, token))
    const path = usePathname();
    const [openCompanyProfile, setOpenCompanyProfile] = useState(false)
    const refProfie = useRef()
    const user = menuData?.user;
    const company = menuData?.partnership;
    console.log(menuData, token)


    const handleOpenCompanyProfile = () => {
        openCompanyProfile ? setOpenCompanyProfile(false) : setOpenCompanyProfile(true)
    }

    useEffect(() => {
        create()
    }, [])

    const closeModal = (e) => {
        e.stopPropagation()
        if (refProfie.current && !refProfie.current.contains(e.target)) {
            setOpenCompanyProfile(false)
            return
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <>
            <div ref={refProfie}>
                <CompanyProfile open={openCompanyProfile} />
            </div>

            <div className={s.menu}>
                <div className={classNames(s.overlay, openCompanyProfile && s.overlay_open)}></div>

                <div className={s.header}>
                    {company?.brand_type === 0 ?
                        <Image className={s.logo} src={logo}></Image>
                        :
                        <img className={s.logo}
                            src={`https://lk.skilla.ru/documents/brands/${company?.brand_type}/logo_new.png`}
                        />
                    }

                </div>


                <div onClick={handleOpenCompanyProfile} className={s.profile}>
                    <ProfileLogo className={s.logo_small} />
                    <div className={s.avatar}>
                        <img src={user?.avatar !== ''
                            ? `https://lk.skilla.ru/images/persons/chat/${user?.avatar}`
                            :
                            cat} alt='аватар пользователя' />
                    </div>

                    <div className={s.block}>
                        <p className={s.name}>{user?.name}</p>
                        <p className={s.company}>{company?.name}</p>
                    </div>

                    <p className={s.date}>Пятница, 14 февраля</p>

                    {company?.is_pro === 0 && <button onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        router.push('/pay')
                    }} className={s.button_pro}
                    >
                        <IconLightning />
                        <p>Повысить до PRO</p>
                    </button>}


                </div>

                <Scrollbar className={classNames(s.navigation, s.navigation_maxheight2)}>
                    <div className={s.container}>
                        {menuItem.map(el => {
                            if (el.submenu) {
                                return <SubMenu el={el} key={el.id} />
                            }
                            return <Link
                                id={el.id}
                                key={el.id}
                                href={el.link}
                                /*  onClick={() => el.link === '/orders' ? 
                                     history.pushState(null, null, '/orders') 
                                     : 
                                     null
                                 } */
                                className={classNames(s.link,
                                    (path === el.link || (el.sublink && path.includes(el.sublink)))

                                    && s.link_active)}
                            >
                                <el.icon />
                                {el.name}

                            </Link>
                        })}
                    </div>

                </Scrollbar>
                <FunctionBlock company={company} />
            </div>
        </>

    )
};

const SubMenu = ({ el }) => {
    const path = usePathname();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }

    useEffect(() => {
        open && !el.submenu.find(el => el.link === path) && setOpen(false)
    }, [path, el.submenu]);

    return (
        <div className={s.link_list}>
            <div onClick={handleOpen} className={classNames(s.link)}>
                <el.icon />
                {el.name}
                <Arrow className={classNames(s.arrow, open && s.arrow_up)} />
            </div>

            <ul className={classNames(s.list, open && s.list_open)}>
                {el.submenu.map(item => {
                    return <Link
                        id={item.id}
                        key={item.id}
                        href={item.link}
                        className={classNames(s.link, s.link_sub,
                            (path === item.link || (el.sublink && path.includes(el.sublink)))

                            && s.link_active)}
                    >

                        {item.name}

                    </Link>
                })}
            </ul>
        </div>

    )
}

export default Menu;