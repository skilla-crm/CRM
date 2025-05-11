
import s from './SkeletonLogs.module.scss';
import Loader from '../Loader/Loader';

const SkeletonLogs = () => {
    return (

        <div className={s.root}>

            <div className={s.section}>
                <div className={s.header}>
                    <Loader width={180} height={28} />

                    <div className={s.items}>
                        <Loader width={240} height={38} />
                        <Loader width={80} height={14} />
                        <Loader width={100} height={14} />
                        <Loader width={80} height={14} />
                        <Loader width={80} height={14} />
                    </div>


                </div>

                <div className={s.subheader}>
                </div>

                <Loader width={1270} height={40} />

                <ul className={s.column}>
                    {[...Array(20)].map((el, i) => {
                        return <li key={i} className={s.string}>
                            <Loader width={180} height={14} />
                            <div className={s.string2}>
                                <Loader width={80} height={14} />
                                <Loader width={280} height={14} />
                            </div>



                        </li>
                    })}
                </ul>


            </div>

        </div>
    )
};



export default SkeletonLogs;

