import { useEffect, useState } from "react";


const useEstablishContactCenterChannel = (user) => {
    const [channel, setChannel] = useState(null);

    async function handleEstablish() {
        const socket = new WebSocket(`wss://lk.skilla.ru:8010/?token=nastyakop`);
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

