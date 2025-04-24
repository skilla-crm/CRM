import s from './CompanyProfile.module.scss';
import classNames from 'classnames';
import Scrollbar from 'react-scrollbars-custom';
import Image from 'next/image';
import Dashboard from '@/public/icons/iconDashboard.svg';
import Wallet from '@/public/icons/iconWallet.svg';
import Logout from '@/public/icons/logout.svg';
import Forward from '@/public/icons/iconBackForward.svg';
import Done from '@/public/icons/iconDone.svg';
import AvatarDefault from '@/public/images/AvatarDefault.png';

//components
import CompanyList from '../CompanyList/CompanyList';
import Details from '../Details/Details';
const workers = [
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'operator' },
    { name: 'Иванов Иван', position: 'accountant' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'operator' },
    { name: 'Иванов Иван', position: 'accountant' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'operator' },
    { name: 'Иванов Иван', position: 'accountant' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'operator' },
    { name: 'Иванов Иван', position: 'accountant' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'operator' },
    { name: 'Иванов Иван', position: 'accountant' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'operator' },
    { name: 'Иванов Иван', position: 'accountant' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },
    { name: 'Иванов Иван', position: 'supervisor' },

]

const CompanyProfile = ({ open }) => {
    const positions = workers.reduce((acc, curr) => {
        if (acc.findIndex(el => el.position === curr.position) === -1) {
            acc.push(curr);
        }
        return acc;
    }, []).map((el) => { return el.position });;

    return (
        <div className={classNames(s.root, open && s.root_open)}>

            <div className={s.header}>
                <p className={s.name}>Константин Константинов Константинов</p>
                <p className={s.text}>Руководитель</p>
                <CompanyList />
            </div>

            <Details />

            <Scrollbar className={s.scroll}>
                <div>
                    {positions?.map((el, i) => {
                        return <div key={i} className={s.position}>
                            <span>
                                {el === 'director' && 'Руководитель'}
                                {el === 'supervisor' && 'Менеджер по персоналу'}
                                {el === 'operator' && 'Менеджер по работе с клиентами'}
                                {el === 'accountant' && 'Бухгалтер'}
                            </span>
                            <div className={s.workers}>
                                {(workers?.filter(item => item.position === el)).map((el, i) => {
                                    return <Worker key={i} el={el} />
                                })}
                            </div>
                        </div>
                    })}
                </div>
                <div className={s.position}>

                </div>

            </Scrollbar>

            <div className={s.bottom}>
                <button>
                    <Dashboard />
                    <p>О Скилла IS</p>
                </button>
                <button>
                    <Wallet />
                    <p>Оплата услуг</p>
                </button>
            </div>

            <button className={s.logout}>
                <Logout />
                <p>Выйти</p>
            </button>
        </div>
    )
};

const Worker = ({ el }) => {
    return (
        <div className={s.worker}>
            <div className={s.avatar}>
                <Image src={AvatarDefault} alt='аватар'/>
            </div>
            <p>{el.name}<sup>2343</sup></p>
            <Forward />
            {/* <Done /> */}
        </div>

    )
}

export default CompanyProfile;