import { useEffect, useState } from "react";


const useEstablishCallChannel = (token) => {
    const [channel, setChannel] = useState(null);

    async function handleEstablish() {
        const socket = new WebSocket("wss://lk.skilla.ru:8001/?user=136017915267f7bf19c84cc67f7bf19c8504");
        setChannel(socket)

    }


    useEffect(() => {
        if (token) {
            handleEstablish()
        }



    }, [token])

    return channel
}

export default useEstablishCallChannel;




