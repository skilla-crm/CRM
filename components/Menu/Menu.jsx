'use client'
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import useSWR from 'swr'
import dayjs from 'dayjs';
require('dayjs/locale/ru')
import { Scrollbar } from 'react-scrollbars-custom';
import { create } from '@/actions';
import { fetchWithToken, fetchTokenChat, newMessageAttention } from '@/api/api';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import classNames from 'classnames';
import s from './Menu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import AvatarDefault from '@/public/images/AvatarDefault.png';
import Logo from '@/public/images/skilla.png';
import ProfileLogo from '@/public/icons/profileLogo.svg';
import IconLightning from '@/public/icons/iconLightning.svg';
import Arrow from '@/public/icons/menu/arrow.svg';
import Chewron from '@/public/icons/iconChewronForward.svg';
import BadgePro from '@/public/icons/badgePro.svg';
//constants
import { menuItem, menuItemTest } from '@/constants/menu';
import { oneCityTokens, testTokens } from '@/constants/exceptions';
//components
import FunctionBlock from '../FunctionBlock/FunctionBlock';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const Menu = ({ activeCompany, setActiveCompany }) => {
    const hiddenButtonRef = useRef()
    const cookies = useCookies();
    const hidemenu = cookies.get('hidemenuNew')
    const avatar_mini = cookies.get('avatar_mini')
    const name = cookies.get('name') ? decodeURI(cookies.get('name')).replace(/\+/g, ' ') : 'нет имени'
    const date = cookies.get('date')
    const brand = cookies.get('brand')
    const ispro = cookies.get('is_pro')
    const token = cookies.get('token')
    const isBlockedCookies = cookies.get('is_blocked');
    const { data: menuEvents, isLoading: isLoadingEvents, mutate } = useSWR(`${baseURL}menu_events`, url => fetchWithToken(url, token))
    const { data: menuData, isLoading, mutate: mutatueMenu } = useSWR(`${baseURL}menu`, url => fetchWithToken(url, token))
    const [openCompanyProfile, setOpenCompanyProfile] = useState(false);
    const [dopBlockState, setDopBlock] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(hidemenu === '1' ? true : false)
    const [eventsLinks, setEventsLinks] = useState([])
    const [visButton, setVisButton] = useState(false)
    const router = useRouter()
    const path = usePathname();
    const user = menuData?.user;
    const company = menuData?.partnership;
    const partnerships = menuData?.partnerships_contract_to;
    const partnershipsDop = menuData?.partnerships_connect_to;
    const persons = menuData?.persons;
    const city = menuData?.city;
    const phone = menuData?.phone;
    const email = menuData?.email;
    const isBlocked = company?.is_blocked;
    const dateNow = dayjs(date).locale('ru')
    const dayNow = dayjs(date).date()
    const paidTo = dayjs(company?.paid_to).locale('ru');
    const dayDiff = paidTo.diff(dateNow, 'day');
    const test = testTokens.includes(token)
    const oneCity = !oneCityTokens.some(el => el === token)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://lk.skilla.ru/chatv2/?token_tmp=${token}`)
            const tokenChat = await res.json()
            

            console.log("tokenChat", tokenChat)
                newMessageAttention(tokenChat?.token)
                    .then(res => {
                        res.count > 0 && setEventsLinks(prevState => [...prevState, '/support/chat'])
                        console.log(res)
                    })
        }
        

            fetchData()

    }, [token, menuEvents])

    /* useEffect(() => {
        create()
    }, []) */

    useEffect(() => {
        mutate()
        mutatueMenu()
    }, [token])

    useEffect(() => {
        if (menuEvents?.orders) {
            setEventsLinks(prevState => [...prevState, '/orders'])
        }

        if (menuEvents?.purchases) {
            setEventsLinks(prevState => [...prevState, '/purchases'])
        }

        if (menuEvents?.wiki) {
            setEventsLinks((prevState) => [...prevState, '/support/faq'])
        }
    }, [menuEvents])


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
        console.log(path, link)
        if (path.includes(link)) {
            window.history.back()
            return
        }
    }


    const handleHidenMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (openCompanyProfile) {
            setOpenCompanyProfile(false)
        } else {
            if (hiddenMenu) {
                setHiddenMenu(false)
                document.cookie = 'hidemenuNew=0'
            } else {
                setHiddenMenu(true)
                document.cookie = 'hidemenuNew=1'
            }
        }

    }


    const handleVisButton = () => {
        setVisButton(true)
    }

    const handleHiddenButton = () => {
        setVisButton(false)
    }


    return (
        <div onMouseEnter={handleVisButton} onMouseLeave={handleHiddenButton} className={s.root}>

            <button ref={hiddenButtonRef} onClick={handleHidenMenu} className={classNames(s.button_hide, hiddenMenu && !openCompanyProfile && s.button_hide_active, visButton && s.button_hide_vis)}>
                <Chewron />
            </button>

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
                partnerships={oneCity ? partnerships : []}
                partnershipsDop={partnershipsDop}
                isLoading={isLoading}
                activeCompany={activeCompany}
                setActiveCompany={setActiveCompany}
                details={menuData?.partnerships_details}
            />

            <div className={classNames(s.menu, hiddenMenu && s.menu_hidden)}>
                <div className={classNames(s.overlay, openCompanyProfile && s.overlay_open)}></div>
                <div onClick={handleHidenMenu} className={s.header}>
                    {(brand !== '0' && brand) ?
                        <img className={classNames(s.logo, hiddenMenu && s.logo_hidden)}
                            src={`https://lk.skilla.ru/documents/brands/${brand}/logo_new.png`}
                        />
                        :
                        <Image height={36} className={classNames(s.logo, hiddenMenu && s.logo_hidden)} src={Logo} alt='логотип'></Image>
                    }


                </div>

                <div onClick={handleOpenCompanyProfile} className={classNames(s.profile, hiddenMenu && s.profile_hidden)}>
                    <ProfileLogo className={classNames(s.logo_small, hiddenMenu && s.logo_hidden)} />
                    <BadgePro className={classNames(s.bage, ispro === '1' && !hiddenMenu && s.bage_vis)} />
                    <div className={classNames(s.avatar, hiddenMenu && s.avatar_hidden)}>
                        {(!avatar_mini || avatar_mini === '') ?
                            <Image src={AvatarDefault} alt='логотип'></Image>
                            :
                            <img src={`https://lk.skilla.ru/images/persons/chat/${avatar_mini}`} alt='аватар пользователя' />
                        }
                    </div>

                    <div className={classNames(s.block, hiddenMenu && s.block_hidden)}>
                        <p className={s.name}>{name}</p>
                        {<p className={classNames(s.company, !isLoading && s.company_vis)}>
                            {activeCompany?.name && activeCompany?.name}
                            {!activeCompany?.name && partnershipsDop?.length > 0 && 'Все компании'}
                        </p>}


                    </div>

                    <p className={classNames(s.date, hiddenMenu && s.date_hidden)}>{dateNow.format('dddd, D MMMM').slice(0, 1).toUpperCase()}{dateNow.format('dddd, D MMMM').slice(1)}</p>

                    {ispro === '0' && <button onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        router.push('/pay')
                    }} className={classNames(s.button_pro, hiddenMenu && s.button_pro_hidden)}
                    >
                        <IconLightning />
                        <p>Повысить до PRO</p>
                    </button>}


                    <div className={classNames(s.profile_small, hiddenMenu && s.profile_small_vis)}>
                        <ProfileLogo />
                        {ispro === '1' && <BadgePro />}

                        <div className={s.block_small}>
                            <p className={s.date}>{dateNow.format('D.MM')}</p>
                            <p className={s.date}>{dateNow.format('dd').slice(0, 1).toUpperCase()}{dateNow.format('dd').slice(1)}</p>
                        </div>


                    </div>
                </div>



                <Scrollbar className={classNames(
                    s.navigation,
                    dopBlockState && s.navigation_maxheight2,
                    (ispro === '0' && !dopBlockState) && s.navigation_maxheight3,
                    (ispro === '0' && dopBlockState) && s.navigation_maxheight4,
                    (isBlocked === 1 || isBlockedCookies === '1') && s.navigation_block,
                )}>
                    <div className={s.container}>
                        {(test ? menuItemTest : menuItem).map(el => {
                            const eventsSub = eventsLinks.some(link => link.includes(el?.link))
                            if (el.submenu) {
                                return <SubMenu
                                    el={el}
                                    key={el.id}
                                    hiddenMenu={hiddenMenu}
                                    setHiddenMenu={setHiddenMenu}
                                    eventsLinks={eventsLinks}
                                    isLoading={isLoading}
                                    handleBack={handleBack}
                                />
                            }
                            return <Link
                                onClick={() => handleBack(el.sublink)}
                                id={el.id}
                                key={el.id}
                                href={el.link}
                                className={classNames(s.link,
                                    eventsSub && s.link_events,
                                    isLoading && s.link_events_hidden,
                                    eventsSub && path === el.link && s.link_events_active,
                                    (path === el.link || (el.sublink && path.includes(el.sublink))) && s.link_active,
                                    hiddenMenu && s.link_hidden)}
                            >
                                <el.icon />

                                <p className={classNames(s.point, hiddenMenu && s.point_hidden)}>{el.name}</p>

                            </Link>
                        })}
                    </div>
                    <div onClick={handleHidenMenu} className={s.area}></div>
                </Scrollbar>

                <FunctionBlock company={company} isLoading={isLoading} hiddenMenu={hiddenMenu} test={test} />
            </div>
        </div>

    )
};

const SubMenu = ({ el, hiddenMenu, setHiddenMenu, eventsLinks, isLoading, handleBack }) => {
    const path = usePathname();
    const [open, setOpen] = useState(false);
    const [events, setEvents] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (eventsLinks.some(link => link.includes(el?.link))) {
            setEvents(true)
        } else {
            setEvents(false)
        }
    }, [eventsLinks, el])

    useEffect(() => {
        if ((el.submenu.some(link => path === link.link) || el.submenu.some(link => path.includes(link.sublink))) && !hiddenMenu) {
            setOpen(true)
            return
        }
    }, [path, el, hiddenMenu])

    useEffect(() => {
        if (el.submenu.some(link => path.includes(link.link)) && !open && !isLoading) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [path, el, open, isLoading])

    useEffect(() => {
        hiddenMenu && setOpen(false)
    }, [hiddenMenu])

    const handleOpen = () => {
        if (open) {
            setOpen(false)
        } else {
            setHiddenMenu(false)
            setOpen(true)
        }
    }

    useEffect(() => {
        open && !el.submenu.find(el => path.includes(el.link) || path.includes(el.sublink)) && setOpen(false)
    }, [path, el.submenu]);

    return (
        <div className={s.link_list}>
            <div onClick={handleOpen} className={classNames(
                s.link,
                events && s.link_events,
                open && s.link_events_hidden,
                hiddenMenu && s.link_hidden,
                active && s.link_active,
                events && active && s.link_events_active,
            )}>
                <el.icon />
                <p className={classNames(s.point, hiddenMenu && s.point_hidden)}>{el.name}</p>
                <Arrow className={classNames(s.arrow, open && s.arrow_up, hiddenMenu && s.arrow_right)} />
            </div>

            <ul style={{ maxHeight: open ? `${el.submenu.length * 44}px` : 0 }} className={classNames(s.list, open && s.list_open)}>
                {el.submenu.map(item => {
                    const eventsSub = eventsLinks.some(link => link.includes(item?.link))
                    return <Link
                        onClick={() => handleBack(item.sublink)}
                        id={item.id}
                        key={item.id}
                        href={item.link}
                        className={classNames(s.link, s.link_sub,
                            eventsSub && s.link_events,
                            eventsSub && path === item.link && s.link_events_active,
                            (path === item.link || (item.sublink && path.includes(item.sublink)))
                            && s.link_active)}
                    >

                        <p className={classNames(s.point, hiddenMenu && s.point_hidden)}>{item.name}</p>

                    </Link>
                })}
            </ul>
        </div>

    )
}

export default Menu;