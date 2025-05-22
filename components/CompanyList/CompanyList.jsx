import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { useCookies } from 'next-client-cookies';
import s from './CompanyList.module.scss';
import { redirect } from 'next/navigation';
import Arrow from '@/public/icons/menu/arrow.svg';
import Done from '@/public/icons/iconDone.svg';

const CompanyList = ({ company, allCompanies, partnerships, partnershipsDop, activeCompany, setActiveCompany }) => {
    const cookies = useCookies();
    const [open, setOpen] = useState(false);
    const listRef = useRef();
    const fieldRef = useRef();
    const cities = partnerships?.reduce((acc, curr) => {
        if (acc.findIndex(el => el.city === curr.city) === -1) {
            acc.push(curr);
        }
        return acc;
    }, []).map((el) => { return el.city });

    useEffect(() => {
        if (partnershipsDop && company && partnershipsDop?.length === 0) {
            setActiveCompany(company)
            company.id && cookies.set('active-company', company?.id)
            return
        }

    }, [company, partnershipsDop])

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
        localStorage.setItem('', JSON.stringify(item))
        cookies.set('active-company', item?.id)
        cookies.set('activeCompanyName', JSON.stringify(item))
        setOpen(false)
    }

    const handleAuthCompany = (e) => {
        const id = e.currentTarget.id;
        redirect(`https://lk.skilla.ru/director/auth/?id=${id}`)

    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <div className={s.root}>
            <div ref={fieldRef} onClick={handleOpen} className={classNames(s.field, open && s.field_open)}>
                {activeCompany?.name && <p>{activeCompany?.name}</p>}
                {!activeCompany?.name && <p>Все компании</p>}
                <Arrow className={classNames(s.arrow, open && s.arrow_up)} />
            </div>

            <ul ref={listRef} style={{ maxHeight: open ? `${allCompanies?.length * 44 + 44 + 40 + 30 + 4 + cities?.length * 30}px` : '0' }} className={classNames(s.list, open && s.list_open)}>
                <p className={s.city}>{company?.city}</p>
                {partnershipsDop?.length > 0 && <li onClick={() => handleChoseActiveCompany({})} className={classNames(s.item, s.item_2, !activeCompany?.id && s.item_active)}>

                    <p>Все компании</p>
                    <div className={classNames(s.done_2, !activeCompany?.id && s.done_active)}>
                        <Done />
                    </div>
                </li>}

                <li onClick={() => handleChoseActiveCompany(company)} className={classNames(s.item, activeCompany?.id === company?.id && s.item_active)}>
                    <div className={s.block}>
                        <p>{company?.name}</p>
                        <span>ИНН {company?.inn} {company?.kpp !== '' && 'КПП'} {company?.kpp}</span>
                    </div>
                    <div className={classNames(s.done, activeCompany?.id === company?.id && s.done_active)}>
                        <Done />
                    </div>
                </li>

                {partnershipsDop?.map((el) => {
                    return <li onClick={() => handleChoseActiveCompany(el)} key={el.id} className={classNames(s.item, activeCompany?.id === el.id && s.item_active)}>
                        <div className={s.block}>
                            <p>{el.name}</p>
                            <span>ИНН {el.inn} {el.kpp !== '' && 'КПП'} {el.kpp}</span>
                        </div>
                        <div className={classNames(s.done, activeCompany?.id === el.id && s.done_active)}>
                            <Done />
                        </div>

                    </li>
                })}
                {partnershipsDop?.length > 0 && <div className={s.separator}></div>}
                {cities?.map((el, i) => {
                    return <div key={i} className={s.block_city}>
                        <p className={s.city}>{el}</p>

                        {partnerships?.filter((item) => item.city === el)?.map((el) => {
                            return <li id={el.dir_id} key={el.id} onClick={handleAuthCompany} className={s.item}>
                                <div className={s.block}>
                                    <p>{el.name}</p>
                                    <span>ИНН {el.inn} {el.kpp !== '' && 'КПП'} {el.kpp}</span>
                                </div>

                            </li>

                        })}
                    </div>
                })}

            </ul>
        </div >
    )
}

export default CompanyList;