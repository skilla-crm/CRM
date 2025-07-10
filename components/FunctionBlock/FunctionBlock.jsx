import s from './FunctionBlock.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import dayjs from 'dayjs';
require('dayjs/locale/ru')
//images
import Chewron from '@/public/icons/menu/iconChewron.svg';
import Plus from '@/public/icons/menu/iconPlus.svg';
import Wallet from '@/public/icons/menu/iconWallet.svg';
import Info from '@/public/icons/iconInfo.svg';
import Docs from '@/public/icons/docs.svg';
import LoadDocs from '@/public/icons/loadDocs.svg';
import Purchase from '@/public/icons/purchase.svg';
import Worker from '@/public/icons/worker.svg';
import Customer from '@/public/icons/customer.svg';


const FunctionBlock = ({ company, isLoading, hiddenMenu, test, role }) => {
    return (
        <div className={s.root}>
            <div className={s.blur}></div>
            <div className={s.container}>
                <Subscription company={company} isLoading={isLoading} hiddenMenu={hiddenMenu} />
                <MultiFunctionButton hiddenMenu={hiddenMenu} test={test} role={role} />
            </div>
        </div>
    )
};

const Subscription = ({ company, isLoading, hiddenMenu }) => {
    const [payState, setPayState] = useState('');
    const router = useRouter()
    const dateNow = dayjs().locale('ru')
    const dayNow = dayjs().date()
    const paidTo = dayjs(company?.paid_to).locale('ru');
    const dayDiff = paidTo.diff(dateNow, 'day');


    useEffect(() => {
        if (dayDiff < 0 && company?.paid_to) {
            setPayState('button')
            return
        }

        if (dayDiff >= 0 && dayNow < 6 && dayDiff < 25) {
            setPayState('info')
        } else {
            setPayState('')
        }
    }, [company])

    const handleOpenPayPage = () => {
        router.push('/pay')
    }


    return (
        <div className={classNames(s.block, payState === '' && s.block_hidden, hiddenMenu && s.block_hidden2)}>
            <div onClick={handleOpenPayPage} className={classNames(s.subscription, s.subscription_2, payState === 'info' && !isLoading && s.subscription_vis)}>
                <Info />
                <div className={s.text}>
                    <p>Подписка истекает</p>
                    <p>{dayjs(paidTo).format('D MMMM')}</p>
                </div>
            </div>
            <div className={classNames(s.subscription, payState === 'button' && !isLoading && s.subscription_vis)}>
                <Link href={'/pay'} className={classNames(s.button, s.button_red)}>
                    <Wallet />
                    <p>Продлить подписку</p>
                </Link>
            </div>
        </div>

    )
}

const MultiFunctionButton = ({ hiddenMenu, test, role }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const listRef = useRef()
    const buttonRef = useRef()

    const handleOpenMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if (listRef?.current && !listRef?.current?.contains(e.target) && !buttonRef?.current?.contains(e.target)) {
            setOpenMenu(false)
            return
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <div className={classNames(s.multi, role === 'supervisor' && s.multi_2)}>
            {role === 'director' && <Link href={'/orders/create'} className={classNames(s.button, hiddenMenu && s.button_hidden)}>
                <div className={classNames(s.icon, hiddenMenu && s.icon_hidden)}><Plus /></div>
                <p className={s.add_text}>Новый заказ</p>
            </Link>}

            {role === 'accountant' && <Link href={'/bills/create'} className={classNames(s.button, hiddenMenu && s.button_hidden)}>
                <div className={classNames(s.icon, hiddenMenu && s.icon_hidden)}><Plus /></div>
                <p className={s.add_text}>Новый счет</p>
            </Link>}

            {role === 'supervisor' && <Link href={'/performers/add'} className={classNames(s.button, hiddenMenu && s.button_hidden)}>
                <div className={classNames(s.icon, s.icon_2, hiddenMenu && s.icon_hidden)}><Plus /></div>
                <p className={s.add_text2}>Новый исполнитель</p>
            </Link>}

            {role !== 'supervisor' && <div ref={buttonRef} onClick={handleOpenMenu} className={classNames(s.button, s.button_menu, openMenu && s.button_menu_open, hiddenMenu && s.button_menu_hidden)}>
                <Chewron />
            </div>}

            <ul ref={listRef} className={classNames(s.menu, openMenu && s.menu_open)}>
                <Link onClick={handleCloseMenu} href={'/upd/create'}><li><Docs /> Создать УПД</li></Link>
                <Link onClick={handleCloseMenu} href={'/bills/create'}><li><Docs /> Выставить счет</li></Link>
                {/* <Link onClick={handleCloseMenu} href={''}><li><Docs/> Создать акт-сверки</li></Link> */}
                {<div></div>}
                {/* <Link onClick={handleCloseMenu} href={''}><li><LoadDocs/> Загрузить выписку</li></Link> */}
                <Link onClick={handleCloseMenu} href={'/purchases/create'}><li><Purchase /> Создать закупку</li></Link>
                {role === 'director' && <Link onClick={handleCloseMenu} href={'/performers/add'}><li><Worker /> Добавить исполнителя</li></Link>}
                {/* <Link onClick={handleCloseMenu} href={''}><li><Customer/> Добавить заказчика</li></Link> */}
            </ul>
        </div>
    )
}

export default FunctionBlock;