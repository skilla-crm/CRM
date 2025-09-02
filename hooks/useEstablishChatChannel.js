import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const useEstablishChatChannel = (token, user) => {
    const [channel, setChannel] = useState(null);

    async function handleEstablish() {
        const data = await fetch(`https://lk.skilla.ru/chatv2/?token_tmp=${token}`)
        const chatToken = await data.json()
        
        const echo = new Echo({
            broadcaster: 'reverb',

            client: new Pusher(`${process.env.NEXT_PUBLIC_CHAT_APP_KEY}`, {
                cluster: "mt1",
                wsHost: process.env.NEXT_PUBLIC_WS_CHAT_HOST,
                forceTLS: true,
                disableStats: true,
                enabledTransports: ["ws", "wss"],
                encrypted: true,
                wsPath: '/ws',
                authEndpoint: `${process.env.NEXT_PUBLIC_CHAT_BASE_URL}/broadcasting/auth`,
                auth: {
                    headers: {
                        Authorization: `Bearer ${chatToken.token}`,
                        Accept: "application/json",
                    },
                },
            })
        });

        const channel = echo.private(`messages.1.${user.id}`)
        setChannel(channel)



        window.channelChat = channel;
    }


    useEffect(() => {
        if (user?.id && token) {
            handleEstablish()

           
        }


    }, [token, user?.id])

    return channel
}

export default useEstablishChatChannel;




