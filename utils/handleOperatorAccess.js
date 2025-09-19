import { menuItemOperator, menuItemAccountan } from "@/constants/menu"
import counterparties from '@/public/icons/menu/counterparties.svg'
import bankIcon from '@/public/icons/menu/bank.svg'
import iconCall from '@/public/icons/menu/iconCall.svg'

export const handleOperatorAccess = (user) => {
    const { accounting_module, option_bank_access, option_counterparties_access } = user;
    const customer = { id: 2, name: 'Заказчики', icon: counterparties, link: '/counterparties' }
    const bank = { id: 3, name: 'Банк', icon: bankIcon, link: '/bank' }
    const calls = { id: 12, name: 'Звонки', icon: iconCall, link: '/reports/calls' }

    window.operatorUser = user;


    const menu = menuItemOperator

    if (accounting_module) {
        menuItemAccountan.splice(2, 0, calls)
        return menuItemAccountan
    }

    if (option_bank_access && option_counterparties_access) {
        menu.splice(1, 0, customer, bank)
        return menu
    }

    if (option_bank_access) {
        menu.splice(1, 0, bank)
        return menu
    }

    if (option_counterparties_access) {
        menu.splice(1, 0, customer)
        return menu
    }

    return menu
}