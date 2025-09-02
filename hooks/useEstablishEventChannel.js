/* import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const useEstablishEventChannel = (token, user) => {
    const [channel, setChannel] = useState(null);
    useEffect(() => {

        if (user?.id) {
            const echo = new Echo({
                broadcaster: "pusher",

                client: new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_APP_KEY}`, {
                    cluster: "mt1",
                    wsHost: process.env.NEXT_PUBLIC_PUSHER_APP_HOST,
                    wssPort: process.env.NEXT_PUBLIC_PUSHER_APP_PORT ?? 6001,
                    wsPort: process.env.NEXT_PUBLIC_PUSHER_APP_PORT ?? 6001,
                    forceTLS: false,
                    enableStats: false,
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

            const channel = echo.private(`users.${user.id}`)
            setChannel(channel)

            window.channelData = { userId: user.id, channel };

            return () => {
                channel.stopListening("Broadcasting.UserReceivedEvent");
                echo.leave("users");
            };
        }


    }, [token, user])

    return channel
}

export default useEstablishEventChannel; */




