import s from './MultiFunctionButton.module.scss';
import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
//icons
import Chewron from '@/public/icons/menu/iconChewron.svg';
import Plus from '@/public/icons/menu/iconPlus.svg';
import Docs from '@/public/icons/docs.svg';
import LoadDocs from '@/public/icons/loadDocs.svg';
import Purchase from '@/public/icons/purchase.svg';
import Worker from '@/public/icons/worker.svg';
import Customer from '@/public/icons/customer.svg';

const MultiFunctionButton = ({ hiddenMenu, role, test }) => {
    const path = usePathname();
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

        <>
            {role === 'director' &&
                <div className={classNames(s.multi)}>
                    {role === 'director' && <Link replace={true} href={test ? '/test/orders/create' : '/orders/create'} className={classNames(s.button, hiddenMenu && s.button_hidden)}>
                        <div className={classNames(s.icon, hiddenMenu && s.icon_hidden)}><Plus /></div>
                        <p className={s.add_text}>Новый заказ</p>
                    </Link>}

                    <div ref={buttonRef} onClick={handleOpenMenu} className={classNames(s.button, s.button_menu, openMenu && s.button_menu_open, hiddenMenu && s.button_menu_hidden)}>
                        <Chewron />
                    </div>

                    <ul ref={listRef} className={classNames(s.menu, openMenu && s.menu_open)}>
                        <Link onClick={handleCloseMenu} href={test ? '/test/upd/create' : '/upd/create'}><li><Docs /> Создать УПД</li></Link>
                        <Link onClick={handleCloseMenu} href={test ? '/test/act/create' : '/act/create'}><li><Docs /> Создать Акт</li></Link>
                        <Link onClick={handleCloseMenu} href={test ? '/test/bills/create' : '/bills/create'}><li><Docs /> Выставить счет</li></Link>
                        {<div></div>}
                        <Link onClick={handleCloseMenu} href={'/purchases/create'}><li><Purchase /> Создать закупку</li></Link>
                        {role === 'director' && <Link onClick={handleCloseMenu} href={'/performers/add'}><li><Worker /> Добавить исполнителя</li></Link>}
                    </ul>
                </div>
            }

            {role === 'accountant' && <div className={classNames(s.multi)}>
                <Link href={test ? '/test/bills/create' : '/bills/create'} className={classNames(s.button, hiddenMenu && s.button_hidden)}>
                    <div className={classNames(s.icon, hiddenMenu && s.icon_hidden)}><Plus /></div>
                    <p className={s.add_text3}>Новый счет</p>
                </Link>

                <div ref={buttonRef} onClick={handleOpenMenu} className={classNames(s.button, s.button_menu, openMenu && s.button_menu_open, hiddenMenu && s.button_menu_hidden)}>
                    <Chewron />
                </div>

                <ul ref={listRef} className={classNames(s.menu, openMenu && s.menu_open)}>
                    <Link onClick={handleCloseMenu} href={test ? '/test/upd/create' : '/upd/create'}><li><Docs /> Создать УПД</li></Link>
                    <Link onClick={handleCloseMenu} href={test ? '/test/act/create' : '/act/create'}><li><Docs /> Создать Акт</li></Link>
                    <Link onClick={handleCloseMenu} href={test ? '/test/bills/create' : '/bills/create'}><li><Docs /> Выставить счет</li></Link>
                    {<div></div>}
                    <Link onClick={handleCloseMenu} href={'/purchases/create'}><li><Purchase /> Создать закупку</li></Link>

                </ul>
            </div>}

            {role === 'supervisor' &&
                <Link href={'/performers/add'} className={classNames(s.button, s.button_simple, hiddenMenu && s.button_hidden)}>
                    <div className={classNames(s.icon, s.icon_2, hiddenMenu && s.icon_hidden)}><Plus /></div>
                    <p className={s.add_text2}>Новый исполнитель</p>
                </Link>
            }

            {(role === 'operator' || role === 'mainoperator') &&
                <Link href={test ? '/test/orders/create' : '/orders/create'} className={classNames(s.button, s.button_simple, hiddenMenu && s.button_hidden)}>
                    <div className={classNames(s.icon, s.icon_3, hiddenMenu && s.icon_hidden)}><Plus /></div>
                    <p className={s.add_text}>Новый заказ</p>
                </Link>
            }
        </>

    )
}

export default MultiFunctionButton;