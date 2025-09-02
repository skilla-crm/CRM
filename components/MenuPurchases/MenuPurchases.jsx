'use client'
import s from './MenuPurchases.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconPlus from '../../public/icons/iconPlus.svg';

const MenuPurchases = ({ role, purchaseCount }) => {
    const path = usePathname();

    return (
        <div className={s.container}>
            <div className={s.tabs}>
                <Link href={'/purchases'}><div id='1' className={`${s.tab} ${(path === '/purchases' || path.includes('detail=')) && s.tab_active}`}>Закупки <sup>{purchaseCount}</sup></div></Link>
                <Link href={'/purchases/stock'}><div id='2' className={`${s.tab} ${path.includes('stock') && s.tab_active}`}>Склад</div></Link>
                {role === 'director' && <Link href={'/purchases/manual'}><div id='3' className={`${s.tab} ${path === '/purchases/manual' && s.tab_active}`}>Ручной учет</div></Link>}
            </div>

            {path === '/purchases' && <Link href={'/purchases/create'} className={s.add}>
                <IconPlus />
                <p>Добавить закупку</p>
            </Link>}
        </div>

    )
}

export default MenuPurchases;