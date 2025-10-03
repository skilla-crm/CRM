import s from './FunctionBlock.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import dayjs from 'dayjs';
require('dayjs/locale/ru')
//images

import Wallet from '@/public/icons/menu/iconWallet.svg';
import Info from '@/public/icons/iconInfo.svg';

//components
import MultiFunctionButton from '../MultiFunctionButton/MultiFunctionButton';


const FunctionBlock = ({ company, isLoading, hiddenMenu, test, role }) => {
    return (
        <div className={s.root}>
            <div className={s.blur}></div>
            <div className={s.container}>
                <Subscription company={company} isLoading={isLoading} hiddenMenu={hiddenMenu} role={role}/>
                <MultiFunctionButton hiddenMenu={hiddenMenu} test={test} role={role} />
            </div>
        </div>
    )
};

const Subscription = ({ company, isLoading, hiddenMenu, role }) => {
    const [payState, setPayState] = useState('');
    const router = useRouter()
    const dateNow = dayjs().locale('ru')
    const dayNow = dayjs().date()
    const paidTo = dayjs(company?.paid_to).locale('ru');
    const dayDiff = paidTo.diff(dateNow, 'day');


    useEffect(() => {
        if (dayDiff < 0 && company?.paid_to && (role === 'director' || role === 'accountant')) {
            setPayState('button')
            return
        }

        if (dayDiff >= 0 && dayNow < 6 && dayDiff < 25 && (role === 'director' || role === 'accountant')) {
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


export default FunctionBlock;