import s from './FunctionBlock.module.scss';
import classNames from 'classnames';
import dayjs from 'dayjs';
require('dayjs/locale/ru')
//images
import Chewron from '@/public/icons/menu/iconChewron.svg';
import Plus from '@/public/icons/menu/iconPlus.svg';
import Wallet from '@/public/icons/menu/iconWallet.svg';
import { useEffect, useState } from 'react';

const FunctionBlock = ({ company }) => {
    return (
        <div className={s.root}>
            <div className={s.blur}></div>
            <div className={s.container}>
                <Subscription company={company} />
                <MultiFunctionButton />
            </div>
        </div>
    )
};

const Subscription = ({ company }) => {
    const [payState, setPayState] = useState('');
    const isBlocked = company?.is_blocked;
    const dateNow = dayjs("2026-11-06").locale('ru')
    const dayNow = dayjs("2026-11-06").locale('ru')
    const paidTo = dayjs(company?.paid_to).locale('ru');
    console.log(paidTo, dateNow, paidTo.diff(dateNow, 'day'))

    useEffect(() => {
        if (paidTo.diff(dateNow) < 0) {
            setPayState('button')
            return
        }

        if(paidTo.diff(dateNow) > 0) {

        }
    }, [company])


    return (
        <div className={s.subscription}>
            <button className={classNames(s.button, s.button_red)}>
                <Wallet />
                <p>Продлить подписку</p>
            </button>
        </div>
    )
}

const MultiFunctionButton = () => {
    return (
        <div className={s.multi}>
            <button className={s.button}>
                <Plus />
                <p>Новый заказ</p>
            </button>

            <div className={classNames(s.button, s.button_menu)}>
                <Chewron />
            </div>
        </div>
    )
}

export default FunctionBlock;