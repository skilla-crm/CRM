import s from './CompanyProfile.module.scss';
import { useState, useEffect, useRef } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import dayjs from 'dayjs';
import classNames from 'classnames';
import Scrollbar from 'react-scrollbars-custom';
import Image from 'next/image';
import Dashboard from '@/public/icons/iconDashboard.svg';
import Wallet from '@/public/icons/iconWallet.svg';
import Logout from '@/public/icons/logout.svg';
import Forward from '@/public/icons/iconBackForward.svg';
import Done from '@/public/icons/iconDone.svg';
import IconFaq from '@/public/icons/menu/iconFaq.svg';
import IsLogo from '@/public/icons/skillaIs.svg';
import IconClose from '@/public/icons/iconClose.svg';
import AvatarDefault from '@/public/images/AvatarDefault.png';
//components
import CompanyList from '../CompanyList/CompanyList';
import Details from '../Details/Details';
import LoaderButton from '../LoaderButton/LoaderButton';


const CompanyProfile = ({ open, setOpen, hiddenMenu, hiddenButtonRef, user, company, partnerships, persons, city,
    phone, email, partnershipsDop, isLoading, activeCompany, setActiveCompany, details, role, setActiveCompanyId }) => {
    const path = usePathname();
    const [allCompanies, setAllCompanies] = useState([]);
    const [openModal, setOpenModal] = useState(false)
    const refProfie = useRef()
    const positions = persons?.reduce((acc, curr) => {
        if (acc.findIndex(el => el.position === curr.position) === -1) {
            acc.push(curr);
        }
        return acc;
    }, []).map((el) => { return el.position });

    positions?.sort()

    useEffect(() => {
        const active = JSON.parse(localStorage.getItem('activeCompany'))
        if (partnershipsDop && company && partnershipsDop?.length === 0) {
            setActiveCompany(company)
        }

    }, [company, partnershipsDop])

    useEffect(() => {
        if (!isLoading) {
            setAllCompanies([...partnershipsDop, ...partnerships])
        }
    }, [partnerships, partnershipsDop, isLoading])


    const handleClose = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleLogOut = () => {
        localStorage.clear();

        redirect('https://lk.skilla.ru/login/logout.php')
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if (refProfie.current && !refProfie.current.contains(e.target) && !hiddenButtonRef.current.contains(e.target) && !openModal) {
            setOpen(false)
            return
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, [openModal]);

    return (
        <>
            <div className={classNames(s.overlay, open && s.overlay_open)}></div>
            <div ref={refProfie} className={classNames(s.root, open && !hiddenMenu && s.root_open, hiddenMenu && s.root_2, hiddenMenu && open && s.root_open2)}>

                <div className={s.header}>
                    <p className={s.name}>{user?.name} {user?.surname}</p>
                    <p className={s.text}>
                        {role === 'director' && 'Руководитель'}
                        {role === 'accountant' && 'Бухгалтер'}
                    </p>
                    {allCompanies?.length > 0 && <CompanyList
                        company={company}
                        allCompanies={allCompanies}
                        partnerships={partnerships}
                        partnershipsDop={partnershipsDop}
                        activeCompany={activeCompany}
                        setActiveCompany={setActiveCompany}
                        setActiveCompanyId={setActiveCompanyId}
                    />
                    }
                </div>

                <Details
                    city={city}
                    phone={phone}
                    email={email}
                    code={company?.dir_id}
                    details={details}
                />

                {role === 'director' && <Scrollbar className={s.scroll}>
                    <div>
                        {positions?.map((el, i) => {
                            return <div key={i} className={s.position}>
                                <span>
                                    {el === 'director' && 'Руководитель'}
                                    {el === 'supervisor' && 'Менеджер по персоналу'}
                                    {el === 'operator' && 'Менеджер по работе с клиентами'}
                                    {el === 'mainoperator' && 'Контакт-центр'}
                                    {el === 'accountant' && 'Бухгалтер'}
                                    {el === 'hr' && 'HR'}
                                    {el === 'hr-assist' && 'Ассистент HR'}
                                </span>
                                <div className={s.workers}>
                                    {(persons?.filter(item => item.position === el)).map((el) => {
                                        return <Worker key={el.id} el={el} />
                                    })}
                                </div>
                            </div>
                        })}
                    </div>


                </Scrollbar>
                }


                <div className={classNames(s.bottom, role === 'accountant' && s.bottom_2)}>
                    <Link href='/support/faq' className={classNames(path.includes('/support/faq') && s.link_active)} onClick={handleClose}>
                        <IconFaq />
                        <p>База знаний</p>
                    </Link>
                    <Link href='/pay' onClick={handleClose} className={classNames(path.includes('/pay') && s.link_active)}>
                        <Wallet />
                        <p>Оплата услуг</p>
                    </Link>
                </div>


                <button className={classNames(s.logout, role === 'accountant' && s.logout_margin)} onClick={handleLogOut}>
                    <Logout />
                    <p>Выйти</p>
                </button>
            </div>
            <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </>

    )
};

const Worker = ({ el }) => {
    const [avatarError, setAvtarError] = useState(false)
    const [load, setLoad] = useState(false)
    const router = useRouter()

    const handleAuthWorker = (e) => {
        setLoad(true)
        localStorage.clear();
        const id = e.currentTarget.id;
        router.refresh()
       /*  window.location.reload(); */
        redirect(`https://lk.skilla.ru/director/auth/?id=${id}`)
    }

    const handleLoadAvatarError = () => {
        setAvtarError(true)
    }

    return (
        <div id={el.id} onClick={handleAuthWorker} className={s.worker}>
            <div className={s.avatar}>
                {el.avatar_mini !== '' && !avatarError ?
                    <img onError={handleLoadAvatarError} src={`https://lk.skilla.ru/images/persons/chat/${el?.avatar_mini}`} alt='аватар'></img>
                    :
                    <Image src={AvatarDefault} alt='аватар' />
                }
            </div>
            <p>{el.name} {el.surname}<sup>{el.position === 'supervisor' ? el.id : ''}</sup></p>
            {!load && <Forward />}
            <div className={classNames(s.loader, load && s.loader_active)}>
                <LoaderButton color={'#FFF'} />
            </div>
            {/* <Done /> */}
        </div>
    )
}

const Modal = ({ openModal, setOpenModal }) => {
    const refModal = useRef()
    const year = dayjs().format('YYYY')
    const handleClose = () => {
        setOpenModal(false)
    }
    const closeModal = (e) => {
        e.stopPropagation()
        if (refModal.current && !refModal.current.contains(e.target) && openModal) {
            setOpenModal(false)
            return
        }
    }

    useEffect(() => {

        document.addEventListener('click', closeModal);
        return () => document.removeEventListener('click', closeModal);
    }, [openModal]);

    return (
        <div className={classNames(s.modal, openModal && s.modal_open)}>
            <div ref={refModal} className={s.container}>
                <div onClick={handleClose} className={s.close}>
                    <IconClose />
                </div>
                <IsLogo />

                <p>Skilla © 2013-{year} Копирование информации запрещено<br></br>
                    Skilla — зарегистрированный товарный знак<br></br>
                    Номер свидетельства 771589
                </p>

                <a target='_blank' href='https://skilla.ru/svidetelstvo.html'>Свидетельство о регистрации программы для ЭВM</a>

                <span>Версия 4.0</span>
            </div>
        </div>
    )
}

export default CompanyProfile;