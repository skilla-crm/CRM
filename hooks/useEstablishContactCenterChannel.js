import { useEffect, useState } from "react";


const useEstablishContactCenterChannel = (user) => {
    const [channel, setChannel] = useState(null);

    async function handleEstablish() {
        if (user?.position === 'mainoperator') {
            const socket = new WebSocket(`wss://lk.skilla.ru:8010/?token=${user?.login}`);
            setChannel(socket)
        }
    }

    useEffect(() => {
        if (user) {
            handleEstablish()
        }
    }, [user])

    return channel
}

export default useEstablishContactCenterChannel;

