'use client'
import s from './MenuPurchases.module.scss';
import Link from 'next/link';
import {usePathname } from 'next/navigation';

const MenuPurchases = ({role, purchaseCount}) => {
      const path = usePathname();
      console.log(path)
    return (
        <div className={s.tabs}>
            <Link href={'/purchases'}><div id='1' className={`${s.tab} ${(path === '/purchases' || path.includes('detail=')) && s.tab_active}`}>Закупки <sup>{purchaseCount}</sup></div></Link>
            <Link href={'/purchases/stock'}><div id='2' className={`${s.tab} ${path === '/purchases/stock' && s.tab_active}`}>Склад</div></Link>
           <Link href={'/purchases/manual'}><div id='3' className={`${s.tab} ${path === '/purchases/manual' &&  s.tab_active}`}>Ручной учет</div></Link>
        </div>
    )
}

export default MenuPurchases;