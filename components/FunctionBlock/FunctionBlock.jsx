import s from './FunctionBlock.module.scss';
import classNames from 'classnames';
//images
import Chewron from '@/public/icons/menu/iconChewron.svg';
import Plus from '@/public/icons/menu/iconPlus.svg';
import Wallet from '@/public/icons/menu/iconWallet.svg';

const FunctionBlock = () => {
    return (
        <div className={s.root}>
            <div className={s.blur}></div>
            <div className={s.container}>
                <Subscription />
                <MultiFunctionButton />
            </div>
        </div>
    )
};

const Subscription = () => {
    return (
        <div className={s.subscription}>
            <button className={classNames(s.button, s.button_red)}>
                <Wallet />
                <p>Продлить подписку</p>
            </button>
        </div>
    )
}

const MultiFunctionButton = () => {
    return (
        <div className={s.multi}>
            <button className={s.button}>
                <Plus />
               <p>Новый заказ</p>
            </button>

            <div className={classNames(s.button, s.button_menu)}>
                <Chewron />
            </div>
        </div>
    )
}

export default FunctionBlock;