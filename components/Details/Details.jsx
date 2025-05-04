import s from './Details.module.scss';
import './Scroll.scss';
import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import Scrollbar from 'react-scrollbars-custom';
//API
import { downloadDetails } from '@/app/api/api';
//Icons
import Geo from '@/public/icons/details/geo.svg';
import Code from '@/public/icons/details/code.svg';
import Phone from '@/public/icons/details/phone.svg';
import Mail from '@/public/icons/details/mail.svg';
import Save from '@/public/icons/details/save.svg';
import Arrow from '@/public/icons/arrowS.svg';
import SaveM from '@/public/icons/details/saveM.svg';


const Details = ({ city, phone, email, code, details }) => {
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
            <button onClick={handleCopy} id='city' value={city} className={s.copy}><Geo />{city}</button>
            <button onClick={handleCopy} id='code' value={code} className={s.copy}><Code />Код заказчика - {code}</button>
            <button onClick={handleCopy} id='phone' value={phone} className={s.copy}><Phone /> {phone}</button>
            <button onClick={handleCopy} id='mail' value={email} className={s.copy}><Mail /> {email}</button>
            <div className={s.bottom}>
                <button ref={buttonRef} onClick={handleOpen} className={classNames(s.button, open && s.button_active)}>
                    <Save />
                    <p>Скачать реквизиты</p>
                    <Arrow className={classNames(s.arrow, open && s.arrow_up)} />
                </button>

                <ul ref={listRef} style={{ height: open ? `${details?.length < 9 ? details?.length * 58 + 2 : 8 * 58 + 2}px` : '0' }} className={classNames(s.list, open && s.list_open, details?.length <= 8 && 'noscroll')}>
                    <Scrollbar>
                        {details?.map((el, i) => {
                            return <Item key={i} el={el} />
                        })}
                    </Scrollbar>
                </ul>

            </div>

        </div>
    )
};

const Item = ({ el }) => {
    const cookies = useCookies();
    const token = cookies.get('token')
    const [buttonSave, setButtonSave] = useState(false);
    const [load, setLoad] = useState(false)


    const handleDownload = async () => {
        setLoad(true)
        const data = await downloadDetails(el.partnership_id, el.num, token)
        const link = document.createElement('a');
        let binaryData = [];
        binaryData.push(data);
        console.log(el.partnership_name)
        link.href = URL.createObjectURL(new Blob(binaryData, { type: "application/msword" }));
        link.setAttribute('download', `реквизиты ${el.partnership_name.replace('"', '').replace('"', '')}.docx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setLoad(false)

    }


    return (
        <li
            onClick={handleDownload}
            onMouseEnter={() => setButtonSave(true)}
            onMouseLeave={() => setButtonSave(false)}
            className={s.item}
        >
            <div className={s.left}>
                <p>{el.partnership_name}</p>
                <span>ИНН {el.inn} {el.kpp !== '' && 'КПП'} {el.kpp}</span>
                <span><sup>*</sup>{el.rs.slice(-4)} {el.bank}</span>
            </div>

            <div className={classNames(s.save, (buttonSave || load) && s.save_vis, load && s.save_load)}>
                <SaveM />
            </div>

        </li>
    )
}

export default Details;