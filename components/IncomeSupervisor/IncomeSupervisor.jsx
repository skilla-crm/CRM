'use client'
import s from './IncomeSupervisor.module.scss';
/* import  from '../../public/icons/iconOrders.svg' */
import Orders from '@/public/icons/iconOrders.svg'
import IconPercent from '@/public/icons/iconPercent.svg'
//utils
import { addSpaceNumber } from '@/utils/addSpaceNumber';

const IncomeSupervisor = ({ data }) => {
    return (
        <div className={s.root}>
            {Object.values(data)?.map((el, i) => {
                return <div className={s.item} key={i}>
                    <p className={s.day}>{i === 0 ? 'Вчера' : 'Сегодня'}</p>
                    <div className={s.summ}><IconPercent /> {el.brig_percent ? `${addSpaceNumber(el.brig_percent)} ₽` : '-'}</div>
                    <div className={s.count}><Orders /> {el.orders_count} заказов</div>
                </div>
            })}
        </div>
    )
};

export default IncomeSupervisor;