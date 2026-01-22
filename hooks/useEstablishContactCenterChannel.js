import { useEffect, useState } from "react";


const useEstablishContactCenterChannel = (user) => {
    const [channel, setChannel] = useState(null);

    async function handleEstablish() {
        const socket = new WebSocket(`wss://lk.skilla.ru:8010/?token=KCOktell2`);
        setChannel(socket)

    }


    useEffect(() => {
        if (user) {
            handleEstablish()
        }



    }, [user])

    return channel
}

export default useEstablishContactCenterChannel;




`{
    "action": "newCall",
    "data": {
        "call_id": "000000",
        "entry_id": "000001",
        "is_cc": false,
        "phone": "+7 (000) 000-00-00",
        "name": "Неизвестно",
        "manager_name": "Виталий",
        "city": "Иваново",
        "city_time": "10:42",
        "client_type": "unknown",
        "client_id": 0,
        "client_name": "",
        "client_inn": "",
        "client_ogrn": "",
        "client_kpp": "",
        "client_nds_type": 0,
        "client_client_bit": 0,
        "client_worker_bit": 0,
        "is_has_order": false,
        "partner_data": {
            "id": "200",
            "name": "ИП Виноградова Юлия Алевтиновна",
            "address": "153005, г Иваново, ул.Спартака,д.22, оф.212",
            "city": "Иваново",
            "geo_lat": "57.005066",
            "geo_lon": "40.976646",
            "kladr_id": "3700000100000",
            "inn": "370252224097",
            "kpp": "",
            "ogrn": "321370200055029",
            "ur_adress": "153005, г Иваново, ул.Шошина, д.17, кв.37",
            "bik": "044525974",
            "ks": "30101810145250000974",
            "bank": "АО \"ТБанк\"",
            "rs": "40802810600002962235",
            "brand_name": "Грузчиков-Сервис",
            "transfer_number": "+7 (930) 330-36-04, +7 (930) 347-41-10",
            "site_notice_email": "ivn@gruzchikov-service.ru",
            "office_adress": "Ивановская обл, г Иваново, ул Спартака, д 22, оф.212",
            "seo_site": "ivn.gruzchikov-service.ru",
            "only_nds": 0,
            "only_no_nds": 1,
            "min_time": 2,
            "adv_price": "439"
        }
    }
}`