import dashbord from '@/public/icons/menu/dashboard.svg'
import orders from '@/public/icons/menu/orders.svg'
import counterparties from '@/public/icons/menu/counterparties.svg'
import workers from '@/public/icons/menu/workers.svg'
import bank from '@/public/icons/menu/bank.svg'
import report from '@/public/icons/menu/report.svg'
import purchases from '@/public/icons/menu/purchases.svg'
import support from '@/public/icons/menu/support.svg'
import settings from '@/public/icons/menu/settings.svg'
import calendar from '@/public/icons/menu/iconCalendar.svg'
import sell from '@/public/icons/menu/iconSell.svg'
import bill from '@/public/icons/menu/iconBill.svg'
import iconDocumentIn from '@/public/icons/menu/iconDocumentIn.svg'

export const menuItem = [
    { id: 1, name: 'Дашборд', icon: dashbord, link: '/dashboard' },
    { id: 2, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    {
        id: 3,
        name: 'Заказчики',
        icon: counterparties,

        submenu: [
            { id: 1, name: 'Все заказчики', link: '/counterparties' },
            /*    { id: 2, name: 'Задолженность', link: '/' }, */
            { id: 3, name: 'Счета', link: '/bills', sublinks: ['bills/detail', 'bills/create'] },
            /* { id: 4, name: 'УПД', link: '/upd', sublink: 'upd/detail' }, */
            /*  { id: 5, name: 'Акты сверок', link: '/' }, */
        ]
    },

    {
        id: 4,
        name: 'Исполнители',
        icon: workers,

        submenu: [
            { id: 1, name: 'Все исполнители', link: '/workers', sublinks: ['/worker/'] },
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
            { id: 1, name: 'Итоги компании', link: '/reports/company-results' },
            { id: 2, name: 'Звонки', link: '/reports/calls' },
            { id: 3, name: 'Уведомления', link: '/reports/notifications' },
            { id: 4, name: 'События', link: '/reports/logs' },

        ]
    },

    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublinks: ['purchases'] },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    /*  {
         id: 8,
         name: 'Поддержка',
         icon: support,
         link: '/support',
         submenu: [
             { id: 1, name: 'Чат', link: '/support/chat' },
             { id: 2, name: 'База знаний', link: '/support/faq' },
         ]
     }, */
    { id: 10, name: 'Календарь событий', icon: calendar, link: '/calendar' },
    { id: 9, name: 'Настройки', icon: settings, link: '/settings' },

]




export const menuItemTest = [
    { id: 1, name: 'Дашборд', icon: dashbord, link: '/dashboard' },
    { id: 2, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    {
        id: 3,
        name: 'Заказчики',
        icon: counterparties,

        submenu: [
            { id: 1, name: 'Все заказчики', link: '/counterparties' },
            /*    { id: 2, name: 'Задолженность', link: '/' }, */
            { id: 3, name: 'Счета', link: '/bills', sublinks: ['bills/detail', 'bills/create'] },
            { id: 4, name: 'УПД', link: '/upd', sublinks: ['upd/detail', 'upd/create'] },
            { id: 5, name: 'Акты', link: '/act', sublinks: ['act/detail'] },
            /*  { id: 5, name: 'Акты сверок', link: '/' }, */
        ]
    },

    {
        id: 4,
        name: 'Исполнители',
        icon: workers,

        submenu: [
            { id: 1, name: 'Все исполнители', link: '/workers', sublinks: ['/worker/'] },
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
            { id: 1, name: 'Итоги компании', link: '/reports/company-results' },
            { id: 2, name: 'Звонки', link: '/reports/calls' },
            { id: 3, name: 'Уведомления', link: '/reports/notifications' },
            { id: 4, name: 'События', link: '/reports/logs' },

        ]
    },

    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublinks: ['purchases'] },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    /*  {
         id: 8,
         name: 'Поддержка',
         icon: support,
         link: '/support',
         submenu: [
             { id: 1, name: 'Чат', link: '/support/chat' },
             { id: 2, name: 'База знаний', link: '/support/faq' },
         ]
     }, */
    { id: 10, name: 'Календарь событий', icon: calendar, link: '/calendar' },
    { id: 9, name: 'Настройки', icon: settings, link: '/settings' },

]


export const menuItemAccountan = [
    { id: 1, name: 'Заказы', icon: orders, link: '/orders' },
    { id: 2, name: 'Заказчики', icon: counterparties, link: '/counterparties' },
    { id: 3, name: 'Банк', icon: bank, link: '/payments' },
    { id: 4, name: 'Счета', icon: bill, link: '/bills', sublinks: ['bills/detail', 'bills/create'] },
    {
        id: 5,
        name: 'Продажа',
        icon: sell,

        submenu: [
            { id: 1, name: 'УПД', link: '/upd', sublinks: ['upd/detail', 'upd/create'] },
            { id: 2, name: 'Акты', link: '/act', sublinks: ['act/detail'] },
        ]
    },
    { id: 6, name: 'Покупка', icon: iconDocumentIn, link: '/documents_in' },
    /*  { id: 5, name: 'УПД', icon: counterparties, link: '/upd', sublink: 'upd/detail' },
     { id: 6, name: 'Акты', icon: counterparties, link: '/act', sublink: 'act/detail' }, */
    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    /*  { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' }, */

]