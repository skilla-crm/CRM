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
import iconPlan from '@/public/icons/menu/iconPlan.svg'
import iconPayments from '@/public/icons/menu/iconPayments.svg'
import iconDeal from '@/public/icons/menu/iconDeal.svg'
import iconGroup from '@/public/icons/menu/iconGroup.svg'
import iconNotification from '@/public/icons/menu/iconNotification.svg'
import iconCall from '@/public/icons/menu/iconCall.svg'
import iconReconciliation from '@/public/icons/menu/iconReconciliation.svg'
import IconFaq from '@/public/icons/menu/iconFaq.svg';


export const menuItemAccountan = [
    { id: 1, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    {
        id: 2,
        name: 'Заказчики',
        icon: counterparties,

        submenu: [
            { id: 1, name: 'Все заказчики', link: '/counterparties', sublinks: ['counterparties/details/', 'counterparties/create/'] },
            { id: 2, name: 'Задолженность', link: '/debts', sublinks: ['/debts/'] },
            { id: 3, name: 'Акты сверок', link: '/reconciliation', sublinks: ['reconciliation/detail', 'reconciliation/create'] },
        ]
    },
    { id: 3, name: 'Банк', icon: bank, link: '/bank' },
    { id: 4, name: 'Счета', icon: bill, link: '/bills', sublinks: ['bills/detail', 'bills/create'] },
    {
        id: 5,
        name: 'Продажа',
        icon: sell,

        submenu: [
            { id: 1, name: 'УПД', link: '/upd', sublinks: ['upd/detail', 'upd/create'] },
            { id: 2, name: 'Акты', link: '/act', sublinks: ['act/detail', 'act/create'] },
        ]
    },
    { id: 6, name: 'Покупка', icon: iconDocumentIn, link: '/documents_in' },
    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 9, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] }

]

export const menuItemAccountanTest = [
    { id: 1, name: 'Заказы', icon: orders, link: '/test/orders', sublinks: ['order_detail'] },
    {
        id: 2,
        name: 'Заказчики',
        icon: counterparties,

        submenu: [
            { id: 1, name: 'Все заказчики', link: '/counterpartiesnew', sublinks: ['counterparties/details/', 'counterparties/create/'] },
            { id: 2, name: 'Задолженность', link: '/debts', sublinks: ['/debts/'] },
            { id: 3, name: 'Акты сверок', link: '/reconciliation', sublinks: ['reconciliation/detail', 'reconciliation/create'] },
        ]
    },
    { id: 3, name: 'Банк', icon: bank, link: '/test/bank' },
    { id: 4, name: 'Счета', icon: bill, link: '/test/bills', sublinks: ['bills/detail', 'bills/create'] },
    {
        id: 5,
        name: 'Продажа',
        icon: sell,

        submenu: [
            { id: 1, name: 'УПД', link: '/test/upd', sublinks: ['upd/detail', 'upd/create'] },
            { id: 2, name: 'Акты', link: '/test/act', sublinks: ['act/detail', 'act/create'] },
        ]
    },
    { id: 6, name: 'Покупка', icon: iconDocumentIn, link: '/documents_in' },
    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 9, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] }

]

export const menuItemSupervisor = [
    { id: 1, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    { id: 2, name: 'Исполнители', icon: workers, link: '/performers', sublinks: ['/detail/', '/add'] },
    { id: 3, name: 'Планирование', icon: iconPlan, link: '/workers/planning' },
    { id: 4, name: 'Расчеты', icon: iconPayments, link: '/workers/payments' },
    { id: 5, name: 'Сверка', icon: iconReconciliation, link: '/workers/reconciliation' },
    { id: 6, name: 'Группы', icon: iconGroup, link: '/workers/groups' },
    { id: 7, name: 'Сделки', icon: iconDeal, link: '/workers/smz' },
    { id: 8, name: 'Уведомления', icon: iconNotification, link: '/reports/notifications' },
    { id: 9, name: 'Звонки', icon: iconCall, link: '/reports/calls' },
    { id: 10, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    { id: 11, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 12, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] }
]

export const menuItemSupervisorTest = [
    { id: 1, name: 'Заказы', icon: orders, link: '/test/orders', sublinks: ['order_detail'] },
    { id: 2, name: 'Исполнители', icon: workers, link: '/performers', sublinks: ['/detail/', '/add'] },
    { id: 3, name: 'Планирование', icon: iconPlan, link: '/workers/planning' },
    { id: 4, name: 'Расчеты', icon: iconPayments, link: '/workers/payments' },
    { id: 5, name: 'Сверка', icon: iconReconciliation, link: '/workers/reconciliation' },
    { id: 6, name: 'Группы', icon: iconGroup, link: '/workers/groups' },
    { id: 7, name: 'Сделки', icon: iconDeal, link: '/workers/smz' },
    { id: 8, name: 'Уведомления', icon: iconNotification, link: '/reports/notifications' },
    { id: 9, name: 'Звонки', icon: iconCall, link: '/reports/calls' },
    { id: 10, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    { id: 11, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 12, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] }
]


export const menuItem = [
    { id: 1, name: 'Дашборд', icon: dashbord, link: '/dashboard' },
    { id: 2, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    {
        id: 3,
        name: 'Заказчики',
        icon: counterparties,

        submenu: [
            { id: 1, name: 'Все заказчики', link: '/counterparties', sublinks: ['counterparties/details/', 'counterparties/create/'] },
            { id: 2, name: 'Задолженность', link: '/debts', sublinks: ['/debts/'] },
            { id: 3, name: 'Счета', link: '/bills', sublinks: ['bills/detail', 'bills/create'] },
            { id: 4, name: 'УПД', link: '/upd', sublinks: ['upd/detail', 'upd/create'] },
            { id: 5, name: 'Акты', link: '/act', sublinks: ['act/detail', 'act/create'] },
            { id: 6, name: 'Акты сверок', link: '/reconciliation', sublinks: ['reconciliation/detail', 'reconciliation/create'] },
        ]
    },

    {
        id: 4,
        name: 'Исполнители',
        icon: workers,

        submenu: [
            { id: 1, name: 'Все исполнители', link: '/performers', sublinks: ['/detail/'] },
            { id: 2, name: 'Выплаты СМЗ', link: '/workers/smz' },
            { id: 3, name: 'Расчеты', link: '/workers/payments' },
            { id: 4, name: 'Планирование', link: '/workers/planning' },
            { id: 5, name: 'Группы', link: '/workers/groups', sublinks: ['/update/', '/create/'] },
            { id: 6, name: 'Сверка', link: '/workers/reconciliation' },
        ]
    },


    { id: 5, name: 'Банк', icon: bank, link: '/bank' },

    {
        id: 6,
        name: 'Отчеты',
        icon: report,
        link: '/clients',
        submenu: [
            { id: 1, name: 'Итоги компании', link: '/reports/company-results' },
            { id: 2, name: 'Звонки', link: '/reports/calls' },
            { id: 3, name: 'Уведомления', link: '/reports/notifications' },
            { id: 4, name: 'События', link: '/events' },

        ]
    },

    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublinks: ['purchases'] },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 9, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] },
    { id: 10, name: 'Календарь событий', icon: calendar, link: '/calendar' },
    { id: 11, name: 'Настройки', icon: settings, link: '/settings' },

]


export const menuItemTest = [
    { id: 1, name: 'Дашборд', icon: dashbord, link: '/dashboard' },
    { id: 2, name: 'Заказы', icon: orders, link: '/test/orders', sublinks: ['order_detail'] },
    {
        id: 3,
        name: 'Заказчики',
        icon: counterparties,

        submenu: [
            { id: 1, name: 'Все заказчики', link: '/counterparties', sublinks: ['counterparties/details/', 'counterparties/create/'] },
            { id: 2, name: 'Задолженность', link: '/debts', sublinks: ['/debts/'] },
            { id: 3, name: 'Счета', link: '/test/bills', sublinks: ['bills/detail', 'bills/create'] },
            { id: 4, name: 'УПД', link: '/test/upd', sublinks: ['upd/detail', 'upd/create'] },
            { id: 5, name: 'Акты', link: '/test/act', sublinks: ['act/detail', 'act/create'] },
            { id: 6, name: 'Акты сверок', link: '/reconciliation', sublinks: ['reconciliation/detail', 'reconciliation/create'] },

        ]
    },

    {
        id: 4,
        name: 'Исполнители',
        icon: workers,

        submenu: [
            { id: 1, name: 'Все исполнители', link: '/test/performers', sublinks: ['performers/detail/'] },
            { id: 2, name: 'Выплаты СМЗ', link: '/workers/smz' },
            { id: 3, name: 'Расчеты', link: '/workers/payments' },
            { id: 3, name: 'Расчеты (ТЕСТ)', link: '/workers/paymentsnew' },
            { id: 4, name: 'Планирование', link: '/workers/planning' },
            { id: 5, name: 'Группы', link: '/workers/groups', sublinks: ['/groups/update/', '/groups/create/'] },
            { id: 6, name: 'Сверка', link: '/workers/reconciliation' },
        ]
    },


    { id: 5, name: 'Банк', icon: bank, link: '/test/bank' },

    {
        id: 6,
        name: 'Отчеты',
        icon: report,
        link: '/clients',
        submenu: [
            { id: 1, name: 'Итоги компании', link: '/reports/company-results' },
            { id: 2, name: 'Звонки', link: '/reports/calls' },
            { id: 3, name: 'Уведомления', link: '/reports/notifications' },
            { id: 4, name: 'События', link: '/events' },

        ]
    },

    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublinks: ['purchases'] },
    { id: 8, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 9, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] },
    { id: 10, name: 'Календарь событий', icon: calendar, link: '/calendar' },
    { id: 11, name: 'Настройки', icon: settings, link: '/test/settings', sublinks: ['/companies', '/employees', '/telephony'] },

]


export const menuItemOperator = [
    { id: 1, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    { id: 12, name: 'Звонки', icon: iconCall, link: '/reports/calls' },
    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    { id: 10, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 11, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] },
]

export const menuItemMainOperator = [
    { id: 1, name: 'Заказы', icon: orders, link: '/orders', sublinks: ['order_detail'] },
    { id: 12, name: 'Звонки', icon: iconCall, link: '/reports/calls' },
    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
/*     { id: 10, name: 'Поддержка', icon: support, link: '/support/chat' }, */
]

export const menuItemOperatorTest = [
    { id: 1, name: 'Заказы', icon: orders, link: '/test/orders', sublinks: ['order_detail'] },
    { id: 12, name: 'Звонки', icon: iconCall, link: '/reports/calls' },
    { id: 7, name: 'Закупки', icon: purchases, link: '/purchases', sublink: 'purchases' },
    { id: 10, name: 'Поддержка', icon: support, link: '/support/chat' },
    { id: 11, name: 'База знаний', icon: IconFaq, link: '/support/faq', sublinks: ['/news/', '/kb/'] },
]



