import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchWithToken = (url, token) =>
    axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => res.data.data);


export const downloadDetails = (partnershipId, num, token) =>
    axios
        .get(`https://api2.skilla.ru/api/download_details/${partnershipId}/${num}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                responseType: 'blob'
            })
        .then((res) => {
            return res.data
        });



export const fetchTokenChat = (url) => {
    axios
        .get(url, { headers: { 'Accept': 'application/json' } })
        .then((res) => res);
}


export const newMessageAttention = (token) =>
    axios
        .get(`https://api.chat.skilla.ru/api/messages/count-unread-messages`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
        .then((res) => {
            return res.data
        });


export const sendContact = () =>
    axios
        .post(`https://lk.skilla.ru/orders/api/sendContactsEmail`,
            {
                body: {
                    email: "alexholm200@gmail.com",
                    partnership_id: "200",
                    call_id: "000000",
                    entry_id: "000001",
                    phone: "+7 (000) 000-00-00"

                }
            })
        .then((res) => {
            return res.data
        });


export const sendRequsites = () =>
    axios
        .post(`https://lk.skilla.ru/orders/api/sendRequisitesEmail`,
            {
                body: {
                    email: "alexholm200@gmail.com",
                    partnership_id: "200",
                    call_id: "000000",
                    entry_id: "000001",
                    phone: "+7 (000) 000-00-00"

                }
            })
        .then((res) => {
            return res.data
        });


export const sendComment = () =>
    axios
        .post(`https://lk.skilla.ru/orders/api/sendMessage`,
            {
                body: {
                    message: "fsdfs",
                    partnership_id: "200",
                    call_id: "000000",
                    entry_id: "000001",
                    name: "Неизвестно",
                    phone: "+7 (000) 000-00-00"
                }
            })
        .then((res) => {
            return res.data
        });
