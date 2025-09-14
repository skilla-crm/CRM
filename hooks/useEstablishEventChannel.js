import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const useEstablishEventChannel = (token, user, partnership_id) => {
    const [channel, setChannel] = useState(null);
    useEffect(() => {
        console.log('соединение устванволенно')

        if (user?.id && token) {
            console.log('соединение')
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
            
            setChannel(channel)
             
 
            /*   return () => {
                  channel.stopListening("Broadcasting.UserReceivedEvent");
                  echo.leave("partnerships");
              }; */

        }


    }, [token, user, partnership_id])

    return channel
}

export default useEstablishEventChannel;




