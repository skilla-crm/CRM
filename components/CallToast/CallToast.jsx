import s from './CallToast.module.scss';
import IconPhone from '@/public/icons/iconPhone.svg';

const CallToast = ({closeToast, action, phone, name, company, city}) => {

    return (
        <div className={s.root}>
            <IconPhone />
            <div className={s.block}>
            <p>Входящий вызов<span>{phone}</span></p>
            <p>{name}</p>
            <p>{company.split('<br>').shift()}</p>
            <p>{city}</p>
            </div>
           

        </div>
    )
};

export default CallToast;