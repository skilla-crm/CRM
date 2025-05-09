
import s from './SkeletonDashboard.module.scss';
import Loader from '../Loader/Loader';

const SkeletonDashboard = () => {
    return (

        <div className={s.root}>
            {[...Array(3)].map((el, i) => {
                return <div key={i} className={s.section}>
                <div className={s.header}>
                    <Loader width={140} height={20} />
                    <div className={s.items}>
                        <Loader width={60} height={14} />
                        <Loader width={60} height={14} />
                        <Loader width={60} height={14} />
                        <Loader width={80} height={14} />
                    </div>

                </div>

                <div className={s.container}>
                    <div className={s.graph}>
                        <Loader />
                    </div>

                    <div className={s.block}>
                        <div className={s.indicator}>
                            <Loader width={120} height={14} />
                            <Loader width={100} height={36} />
                        </div>

                        <div className={s.indicator}>
                            <Loader width={120} height={14} />
                            <Loader width={100} height={36} />
                        </div>

                        <div className={s.indicator}>
                            <Loader width={120} height={14} />
                            <Loader width={100} height={36} />
                        </div>

                        <div className={s.indicator}>
                            <Loader width={120} height={14} />
                            <Loader width={100} height={36} />
                        </div>

                    </div>
                </div>
            </div>
            })}
            







        </div>




    )
};



export default SkeletonDashboard;

