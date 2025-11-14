import s from './CallToast.module.scss';
import IconPhone from '@/public/icons/iconPhone.svg';
import Point from '@/public/icons/point.svg';
import IconClose from '@/public/icons/iconCloseGrey.svg';

const CallToast = ({ closeToast, action, phone, name, company, city }) => {

    return (
        <div className={s.root}>
            <IconPhone className={s.icon} />
            <div className={s.block}>
                <div className={s.top}>
                    <p className={s.first}>Входящий вызов</p>
                </div>

                <p className={s.first}>{name} {phone}</p>
                <div className={s.bottom}>
                    <p className={s.second}>{company.split('<br>').shift()}<span> • </span>{city}</p>
                </div>

            </div>

            <IconClose className={s.close} />
        </div>
    )
};

export default CallToast;