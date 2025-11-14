import { useEffect, useState } from "react";


const useEstablishCallChannel = (user) => {
    const [channel, setChannel] = useState(null);

    async function handleEstablish() {
        const socket = new WebSocket(`wss://lk.skilla.ru:8001/?user=${user?.token}`);
        setChannel(socket)

    }


    useEffect(() => {
        if (user) {
            handleEstablish()
        }



    }, [user])

    return channel
}

export default useEstablishCallChannel;




