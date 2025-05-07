import dashbord from '@/public/icons/menu/dashboard.svg'
import orders from '@/public/icons/menu/orders.svg'
import counterparties from '@/public/icons/menu/counterparties.svg'
import workers from '@/public/icons/menu/workers.svg'
import bank from '@/public/icons/menu/bank.svg'
import report from '@/public/icons/menu/report.svg'
import purchases from '@/public/icons/menu/purchases.svg'
import support from '@/public/icons/menu/support.svg'
import settings from '@/public/icons/menu/settings.svg'



export const menuItem = [
    { id: 1, name: 'Дашборд', icon: dashbord, link: '/dashboard' },
    { id: 2, name: 'Заказы', icon: orders, link: '/orders', sublink: 'order_detail' },
    {
        id: 3,
        name: 'Контрагенты',
        icon: counterparties,
        link: '/counterparties',

        /* submenu: [
            { id: 1, name: 'Все заказчики', link: 'https://lk.skilla.ru/clients/' },
            { id: 2, name: 'Задолженность', link: '/' },
            { id: 3, name: 'Счета', link: '/' },
            { id: 4, name: 'УПД', link: '/' },
            { id: 5, name: 'Акты сверок', link: '/' },
        ] */
    },

    {
        id: 4,
        name: 'Исполнители',
        icon: workers,

        submenu: [
            { id: 1, name: 'Все исполнители', link: '/workers' },
            { id: 2, name: 'Выплаты СМЗ', link: '/workers/smz' },
            { id: 3, name: 'Расчеты', link: '/workers/payments' },
            { id: 4, name: 'Планирование', link: '/workers/planning' },
            { id: 5, name: 'Группы', link: '/workers/groups' },
            { id: 6, name: 'Сверка', link: '/workers/reconciliation' },
        ]
    },


    { id: 5, name: 'Банк', icon: bank, link: '/payments' },

    {
        id: 6,
        name: 'Отчеты',
        icon: report,
        link: '/clients',
        submenu: [
            { id: 1, name: 'Итоги компании', link: '/company-results' },
            { id: 2, name: 'Звонки', link: '/calls' },
            { id: 3, name: 'Уведомления', link: '/notifications' },
            { id: 4, name: 'События', link: '/logs' },
           
        ]
    },

    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: '?purchase' },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 9, name: 'Настройки', icon: settings, link: '/settings' },

]