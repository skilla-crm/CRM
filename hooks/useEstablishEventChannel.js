import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const useEstablishEventChannel = (token, user, partnership_id) => {
    const [channel, setChannel] = useState(null);
    console.log('вызов подключения к сокету')
    useEffect(() => {
        if (user?.id && token) {
            const echo = new Echo({
                broadcaster: "pusher",

                client: new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_APP_KEY}`, {
                    cluster: "mt1",
                    wsHost: process.env.NEXT_PUBLIC_PUSHER_APP_HOST,
                    wssPort: process.env.NEXT_PUBLIC_PUSHER_APP_PORT ?? 6001,
                    wsPort: process.env.NEXT_PUBLIC_PUSHER_APP_PORT ?? 6001,
                    forceTLS: true,
                    disableStats: true,
                    enabledTransports: ["ws", "wss"],
                    authEndpoint: `${process.env.NEXT_PUBLIC_BASE_URL}broadcasting/auth`,
                    auth: {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                        },
                    },
                })
            });

            const channel = echo.private(`partnerships.${partnership_id}`)
            window.channelData = { userId: user.id, partnership_id: partnership_id, channel };
            setChannel(channel)


            return () => {
                channel.stopListening("Broadcasting.UserReceivedEvent");
                echo.leave("partnerships");
            };

        }


    }, [token, user, partnership_id])


    useEffect(() => {

    })

    return channel
}

export default useEstablishEventChannel;




