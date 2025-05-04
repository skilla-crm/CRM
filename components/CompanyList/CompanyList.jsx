import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { useCookies } from 'next-client-cookies';
import s from './CompanyList.module.scss';
import Link from 'next/link';
import Arrow from '@/public/icons/menu/arrow.svg';


const CompanyList = ({ company, allCompanies, partnerships, partnershipsDop, activeCompany, setActiveCompany }) => {
    const cookies = useCookies();
    const [open, setOpen] = useState(false);
    const listRef = useRef();
    const fieldRef = useRef();

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if (listRef.current && !listRef.current.contains(e.target) && !fieldRef.current.contains(e.target)) {
            setOpen(false)
            return
        }
    }

    const handleChoseActiveCompany = (item) => {
        setActiveCompany(item)
        cookies.set('active-company', item.id)
        setOpen(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <div className={s.root}>
            <div ref={fieldRef} onClick={handleOpen} className={classNames(s.field, open && s.field_open)}>
                <p>{activeCompany?.name}</p>
                <Arrow className={classNames(s.arrow, open && s.arrow_up)} />
            </div>

            <ul ref={listRef} style={{ maxHeight: open ? `${allCompanies?.length * 44}px` : '0' }} className={classNames(s.list, open && s.list_open)}>

                <li onClick={() => handleChoseActiveCompany(company)} className={classNames(s.item, activeCompany?.id === company?.id && s.item_hidden)}>
                    <p>{company?.name}</p>
                    <span>ИНН {company?.inn} {company?.kpp !== '' && 'КПП'} {company?.kpp}</span>
                </li>

                {partnershipsDop?.map((el) => {
                    return <li onClick={() => handleChoseActiveCompany(el)} key={el.id} className={classNames(s.item, activeCompany?.id === el.id && s.item_hidden)}>
                        <p>{el.name}</p>
                        <span>ИНН {el.inn} {el.kpp !== '' && 'КПП'} {el.kpp}</span>
                    </li>
                })}
                {partnerships?.map((el) => {
                    return <Link key={el.id} href={`/auth/?id=${el.dir_id}`}>
                        <li className={s.item}>
                            <p>{el.name}</p>
                            <span>ИНН {el.inn} {el.kpp !== '' && 'КПП'} {el.kpp}</span>
                        </li>
                    </Link>
                })}
            </ul>
        </div>
    )
}

export default CompanyList;