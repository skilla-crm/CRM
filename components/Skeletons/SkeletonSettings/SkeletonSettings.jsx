
import s from './SkeletonSettings.module.scss';
import Loader from '../Loader/Loader';

const SkeletonSettings = () => {
    return (

        <div className={s.root}>

            <div className={s.section}>
                <div className={s.header}>
                    <div className={s.items}>
                        <Loader width={340} height={20} />
                    </div>
                </div>

                <div className={s.subheader}>
                    <Loader width={240} height={14} />
                </div>



                <ul className={s.column}>
                    {[...Array(20)].map((el, i) => {
                        return <li key={i} className={s.string}>
                            <Loader width={180} height={14} />
                            <Loader width={200} height={38} />
                            <Loader width={480} height={14} />
                        </li>
                    })}
                </ul>

            </div>

        </div>
    )
};



export default SkeletonSettings;

