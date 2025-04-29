import axios from 'axios';

export const fetchWithToken = (url, token) =>
    axios
        .get(url, { headers: { Authorization: token } })
        .then((res) => res.data.data);