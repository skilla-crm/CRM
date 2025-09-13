export const handleNotificationAccesses = (role, person, type, action, description, supervisor_id, user) => {
    if (role === 'director') {
        return true
    }

    if (role === 'supervisor' && description?.includes('Ставка клиенту была изменена')) {
        return false
    }

    if (role === 'supervisor' && action === 'CLOSE') {
        return false
    }

    if (role === 'supervisor' && type === 'ORDERS' && person.all_orders === 1) {
        return true
    }

    if (role === 'supervisor' && type === 'ORDERS' && person.all_orders === 0 && supervisor_id == user.id) {
        return true
    }

    if (role === 'supervisor' && type === 'AUTOSELECT' && supervisor_id == user.id) {
        return true
    }


    return false

}


