import s from './Details.module.scss';
import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import Geo from '@/public/icons/details/geo.svg';
import Code from '@/public/icons/details/code.svg';
import Phone from '@/public/icons/details/phone.svg';
import Mail from '@/public/icons/details/mail.svg';
import Save from '@/public/icons/details/save.svg';
import Arrow from '@/public/icons/arrowS.svg';
import SaveM from '@/public/icons/details/saveM.svg';

const details = [
    { company: 'Скилла Инновации ООО', inn: 11111111111, kpp: 111111111111, bank: '*4444 Сбербанк АО' },
    { company: 'Скилла Инновации ООО', inn: 11111111111, kpp: 111111111111, bank: '*4444 Сбербанк АО' },
    { company: 'Скилла Инновации ООО', inn: 11111111111, kpp: 111111111111, bank: '*4444 Сбербанк АО' },
    { company: 'Скилла Инновации ООО', inn: 11111111111, kpp: 111111111111, bank: '*4444 Сбербанк АО' },
]


const Details = () => {
    const [open, setOpen] = useState(false);
    const listRef = useRef();
    const buttonRef = useRef();

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }

    const handleCopy = (e) => {
        const id = e.currentTarget.id;
        const value = e.currentTarget.value;
        navigator.clipboard.writeText(value)
        console.log(value)
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if (listRef.current && !listRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
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
            <button onClick={handleCopy} id='city' value={'Санкт-Петербург'} className={s.copy}><Geo />Санкт-Петербург</button>
            <button onClick={handleCopy} id='code' value={'6852'} className={s.copy}><Code />Код заказчика - 6852</button>
            <button onClick={handleCopy} id='phone' value={'+7 (000) 000-00-00'} className={s.copy}><Phone /> +7 (000) 000-00-00</button>
            <button onClick={handleCopy} id='mail' value={'go@skilla.ru'} className={s.copy}><Mail /> go@skilla.ru</button>
            <div className={s.bottom}>
                <button ref={buttonRef} onClick={handleOpen} className={classNames(s.button, open && s.button_active)}>
                    <Save />
                    <p>Скачать реквизиты</p>
                    <Arrow className={classNames(s.arrow, open && s.arrow_up)}/>
                </button>
                <ul ref={listRef} className={classNames(s.list, open && s.list_open)}>
                    {details.map((el, i) => {
                        return <Item key={i} el={el} />
                    })}
                </ul>
            </div>

        </div>
    )
};

const Item = ({ el }) => {
    const [buttonSave, setButtonSave] = useState(false);


    return (
        <li
            onMouseEnter={() => setButtonSave(true)}
            onMouseLeave={() => setButtonSave(false)}
            className={s.item}
        >
            <div className={s.left}>
                <p>{el.company}</p>
                <span>{el.inn} {el.kpp}</span>
                <span>{el.bank}</span>
            </div>

            <div className={classNames(s.save, buttonSave && s.save_vis)}>
                <SaveM />
            </div>

        </li>
    )
}

export default Details;