import s from './IncomeSupervisor.module.scss';

const IncomeSupervisor = ({ data }) => {
    console.log(data)
    return (
        <div className={s.root}>
            {Object.values(data)?.map((el, i) => {
                return <div className={s.item} key={i}>
                    <p>{i === 0 ? 'Вчера' : 'Сегодня'}</p>
                    <div>{el.brig_percent ? el.brig_percent : '-'}</div>
                    <div>{el.orders_count}</div>
                </div>
            })}
        </div>
    )
};

export default IncomeSupervisor;