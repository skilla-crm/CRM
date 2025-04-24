import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import s from './CompanyList.module.scss';
import Arrow from '@/public/icons/menu/arrow.svg';

const company = [{ name: 'Компания', inn: 111111111, kpp: 1111111111 }, { name: 'Компания', inn: 111111111, kpp: 1111111111 }, { name: 'Компания', inn: 111111111, kpp: 1111111111 },]

const CompanyList = () => {
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

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <div className={s.root}>
            <div ref={fieldRef} onClick={handleOpen} className={classNames(s.field, open && s.field_open)}>
                <p>sdgdgdg</p>
                <Arrow className={classNames(s.arrow, open && s.arrow_up)} />
            </div>

            <ul ref={listRef} className={classNames(s.list, open && s.list_open)}>
                {company.map((el, i) => {
                    return <li key={i} className={s.item}>
                        <p>{el.name}</p>
                        <span>{el.inn} {el.kpp}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default CompanyList;