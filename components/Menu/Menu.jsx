'use client'
import { useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';
require('dayjs/locale/ru')
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
import Chewron from '@/public/icons/iconChewronForward.svg';
//constants
import { menuItem } from '@/constants/menu';
//components
import FunctionBlock from '../FunctionBlock/FunctionBlock';
import CompanyProfile from '../CompanyProfile/CompanyProfile';


const Menu = ({ menuData, isLoading, activeCompany, setActiveCompany }) => {
    const hiddenButtonRef = useRef()
    const [openCompanyProfile, setOpenCompanyProfile] = useState(false);
    const [dopBlockState, setDopBlock] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(false)
    const router = useRouter()
    const path = usePathname();
    const user = menuData?.user;
    const company = menuData?.partnership;
    const persons = menuData?.persons;
    const city = menuData?.city;
    const phone = menuData?.phone;
    const email = menuData?.email;
    const isBlocked = company?.is_blocked;
    const partnershipDate = menuData?.date;
    const dateNow = dayjs(partnershipDate).locale('ru')
    const dayNow = dayjs(partnershipDate).date()
    const paidTo = dayjs(company?.paid_to).locale('ru');
    const dayDiff = paidTo.diff(dateNow, 'day');

 /*    useEffect(() => {
        create()
    }, []) */


    useEffect(() => {
        if ((dayDiff < 0 && company?.paid_to) || (dayDiff > 0 && dayNow < 6 && dayDiff < 25)) {
            setDopBlock(true)

        } else {
            setDopBlock(false)
        }
    }, [company])

    const handleOpenCompanyProfile = () => {
        openCompanyProfile ? setOpenCompanyProfile(false) : setOpenCompanyProfile(true)
    }

    const handleBack = (link) => {
        if (path.includes(link)) {
            window.history.back()
            return
        }
    }


    const handleHidenMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()
        hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true)
    }



    return (
        <div className={s.root}>
            <CompanyProfile
                open={openCompanyProfile}
                setOpen={setOpenCompanyProfile}
                hiddenMenu={hiddenMenu}
                hiddenButtonRef={hiddenButtonRef}
                user={user}
                company={company}
                persons={persons}
                city={city}
                phone={phone}
                email={email}
                partnerships={menuData?.partnerships_contract_to}
                partnershipsDop={menuData?.partnerships_connect_to}
                isLoading={isLoading}
                activeCompany={activeCompany}
                setActiveCompany={setActiveCompany}
                details={menuData?.partnerships_details}
            />

            <div className={classNames(s.menu, hiddenMenu && s.menu_hidden)}>
                <div className={classNames(s.overlay, openCompanyProfile && s.overlay_open)}></div>
                <div className={s.header}>
                    {company?.brand_type === 0 ?
                        <Image className={classNames(s.logo, hiddenMenu && s.logo_hidden)} src={logo}></Image>
                        :
                        <img className={classNames(s.logo, hiddenMenu && s.logo_hidden)}
                            src={`https://lk.skilla.ru/documents/brands/${company?.brand_type}/logo_new.png`}
                        />
                    }

                    <button ref={hiddenButtonRef} onClick={handleHidenMenu} className={classNames(s.button_hide, hiddenMenu && s.button_hide_active)}>
                        <Chewron />
                    </button>
                </div>

                <div onClick={handleOpenCompanyProfile} className={classNames(s.profile, hiddenMenu && s.profile_hidden)}>
                    <ProfileLogo className={classNames(s.logo_small, hiddenMenu && s.logo_hidden)} />
                    <div className={classNames(s.avatar, hiddenMenu && s.avatar_hidden)}>
                        <img src={user?.avatar !== ''
                            ? `https://lk.skilla.ru/images/persons/chat/${user?.avatar}`
                            :
                            cat} alt='аватар пользователя' />
                    </div>

                    <div className={classNames(s.block, hiddenMenu && s.block_hidden)}>
                        <p className={s.name}>{user?.name}</p>
                        <p className={s.company}>{activeCompany?.name}</p>
                    </div>

                    <p className={classNames(s.date, hiddenMenu && s.date_hidden)}>{dateNow.format('dddd, D MMMM').slice(0, 1).toUpperCase()}{dateNow.format('dddd, D MMMM').slice(1)}</p>

                    {company?.is_pro === 0 && <button onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        router.push('/pay')
                    }} className={s.button_pro}
                    >
                        <IconLightning />
                        <p>Повысить до PRO</p>
                    </button>}


                    <div className={classNames(s.profile_small, hiddenMenu && s.profile_small_vis)}>
                        <ProfileLogo />
                        <div className={s.block_small}>
                            <p className={s.date}>{dateNow.format('D.MM')}</p>
                            <p className={s.date}>{dateNow.format('dd').slice(0, 1).toUpperCase()}{dateNow.format('dd').slice(1)}</p>
                        </div>


                    </div>
                </div>



                <Scrollbar className={classNames(s.navigation, dopBlockState && s.navigation_maxheight2, isBlocked === 1 && s.navigation_block)}>
                    <div className={s.container}>
                        {menuItem.map(el => {
                            if (el.submenu) {
                                return <SubMenu el={el} key={el.id} />
                            }
                            return <Link
                                onClick={() => handleBack(el.sublink)}
                                id={el.id}
                                key={el.id}
                                href={el.link}
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
                <FunctionBlock company={company} isLoading={isLoading} />
            </div>
        </div>

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