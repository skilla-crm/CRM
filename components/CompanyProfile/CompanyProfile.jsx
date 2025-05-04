import s from './CompanyProfile.module.scss';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Scrollbar from 'react-scrollbars-custom';
import Image from 'next/image';
import Dashboard from '@/public/icons/iconDashboard.svg';
import Wallet from '@/public/icons/iconWallet.svg';
import Logout from '@/public/icons/logout.svg';
import Forward from '@/public/icons/iconBackForward.svg';
import Done from '@/public/icons/iconDone.svg';
import AvatarDefault from '@/public/images/AvatarDefault.png';
//components
import CompanyList from '../CompanyList/CompanyList';
import Details from '../Details/Details';

const CompanyProfile = ({ open, setOpen, hiddenMenu, hiddenButtonRef, user, company, partnerships, persons, city,
    phone, email, partnershipsDop, isLoading, activeCompany, setActiveCompany, details }) => {
    const [allCompanies, setAllCompanies] = useState([]);
    const refProfie = useRef()
    const positions = persons?.reduce((acc, curr) => {
        if (acc.findIndex(el => el.position === curr.position) === -1) {
            acc.push(curr);
        }
        return acc;
    }, []).map((el) => { return el.position });

    positions?.sort()

    useEffect(() => {
        if (!isLoading) {
            setAllCompanies([...partnershipsDop, ...partnerships])
        }
    }, [partnerships, partnershipsDop, isLoading])


    const handleClose = () => {
        setOpen(false)
    }


    const handleLogOut = () => {
        console.log('вышел')
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if (refProfie.current && !refProfie.current.contains(e.target) && !hiddenButtonRef.current.contains(e.target)) {
            setOpen(false)
            return
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <>
            <div className={classNames(s.overlay, open && s.overlay_open)}></div>
            <div ref={refProfie} className={classNames(s.root, open && !hiddenMenu && s.root_open, hiddenMenu && s.root_2, hiddenMenu && open && s.root_open2)}>


                <div className={s.header}>
                    <p className={s.name}>{user?.name} {user?.surname}</p>
                    <p className={s.text}>Руководитель</p>
                    <CompanyList
                        company={company}
                        allCompanies={allCompanies}
                        partnerships={partnerships}
                        partnershipsDop={partnershipsDop}
                        activeCompany={activeCompany}
                        setActiveCompany={setActiveCompany}
                    />
                </div>

                <Details
                    city={city}
                    phone={phone}
                    email={email}
                    code={company?.dir_id}
                    details={details}
                />

                <Scrollbar className={s.scroll}>
                    <div>
                        {positions?.map((el, i) => {
                            return <div key={i} className={s.position}>
                                <span>
                                    {el === 'director' && 'Руководитель'}
                                    {el === 'supervisor' && 'Менеджер по персоналу'}
                                    {el === 'operator' && 'Менеджер по работе с клиентами'}
                                    {el === 'mainoperator' && 'Контакт-центр'}
                                    {el === 'accountant' && 'Бухгалтер'}
                                </span>
                                <div className={s.workers}>
                                    {(persons?.filter(item => item.position === el)).map((el) => {
                                        return <Worker key={el.id} el={el} />
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className={s.position}>

                    </div>

                </Scrollbar>

                <div className={s.bottom}>
                    <Link href='/support/faq' onClick={handleClose}>
                        <Dashboard />
                        <p>О Скилла IS</p>
                    </Link>
                    <Link href='/pay' onClick={handleClose}>
                        <Wallet />
                        <p>Оплата услуг</p>
                    </Link>
                </div>

                <Link href='https://lk.skilla.ru/login/logout.php' className={s.logout} onClick={handleLogOut}>
                    <Logout />
                    <p>Выйти</p>
                </Link>
            </div>
        </>

    )
};

const Worker = ({ el }) => {
    return (
        <Link href={`/auth/?id=${el.id}`}>
            <div className={s.worker}>
                <div className={s.avatar}>
                    {el.avatar_mini !== '' ?
                        <img src={`https://lk.skilla.ru/images/persons/chat/${el?.avatar_mini}`} alt='аватар'></img>
                        :
                        <Image src={AvatarDefault} alt='аватар' />
                    }

                </div>
                <p>{el.name} {el.surname}<sup>{el.position === 'supervisor' ? el.id : ''}</sup></p>
                <Forward />
                {/* <Done /> */}
            </div>
        </Link>

    )
}

export default CompanyProfile;