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
            responseType: 'blob' })
        .then((res) => {
                return res.data
            });

