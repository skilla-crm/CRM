'use client'
import s from './Notification.module.scss';
import classNames from 'classnames';
import Copy from '../../public/icons/notification/iconCopy.svg';
import Close from '../../public/icons/notification/iconClose.svg';
import { useEffect, useState } from 'react';

const Notification = ({ type, text, open, setOpen }) => {
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        if (open) {
            setAnim(true)

        } else {
            setAnim(false)
        }
    }, [open, text])

    const handleClose = () => {
        setAnim(false)

        setTimeout(() => {
            setOpen(false)
        }, 200)

    }



    return (
        <div className={s.root}>
            <div className={classNames(s.notification, anim && s.notification_anim)}>
                <div className={s.line}></div>
                {type === 'copy' && <Copy />}
                <p>{text}</p>
                {type !== 'copy' && <div onClick={handleClose} className={s.close}><Close /></div>}
            </div>
        </div>

    )
};

export default Notification