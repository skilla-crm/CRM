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

export async function sendRequest(url, { arg }) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
}