
import s from './SkeletonСounterparties.module.scss';
import Loader from '../Loader/Loader';

const SkeletonСounterparties = () => {
    return (

        <div className={s.root}>

            <div className={s.section}>
                <div className={s.header}>
                    <div className={s.items}>
                        <Loader width={140} height={20} />
                        <Loader width={300} height={36} />
                        <Loader width={220} height={14} />
                    </div>

                    <Loader width={80} height={28} />
                </div>

                <div className={s.subheader}>
                    <div className={s.sub}>
                        <Loader width={140} height={14} />
                        <Loader width={140} height={14} />
                        <Loader width={140} height={14} />
                    </div>
                    <div className={s.sub2}>
                        <Loader width={40} height={36} />
                        <Loader width={380} height={36} />
                        <Loader width={40} height={36} />
                    </div>
                    <div className={s.sub3}>
                        <Loader width={340} height={14} />
                    </div>
                </div>

                <Loader width={1270} height={40} />

                <ul className={s.column}>
                    {[...Array(20)].map((el, i) => {
                        return <li key={i} className={s.string}>
                            <Loader width={100} height={14} />
                            <Loader width={100} height={14} />
                            <Loader width={80} height={14} />
                            <Loader width={40} height={14} />
                            <Loader width={100} height={14} />
                            <Loader width={100} height={14} />
                            <Loader width={100} height={14} />

                        </li>
                    })}
                </ul>

               
            </div>

        </div>
    )
};



export default SkeletonСounterparties;

