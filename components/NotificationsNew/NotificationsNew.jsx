'use client'
import s from './NotificationsNew.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast, Slide } from "react-toastify";
//hooks
import useEstablishEventChannel from '@/hooks/useEstablishEventChannel';
import useEstablishChatChannel from '@/hooks/useEstablishChatChannel';
//components
import CustomToast from '../CustomToast/CustomToast';

const NotificationsNew = ({ token, user }) => {
    const channelEvents = useEstablishEventChannel(token, user)
    const channelChat = useEstablishChatChannel(token, user)

    useEffect(() => {
        if (channelEvents) {
            channelEvents.listen(
                "Broadcasting.UserReceivedEvent",
                (data) => {
                    console.log(data)
                    const { description } = data;

                    description && setTimeout(() => {
                        toast(
                            ({ closeToast }) => (
                                <CustomToast
                                    message={description}
                                    closeToast={closeToast}
                                    /*   icon={<IconDoneBlue />} */
                                    type="success"
                                />
                            ),
                            {
                                autoClose: 95000,
                                closeButton: false,
                            }
                        );
                    }, 300)


                }
            )
        }
    }, [channelEvents])

    /*  useEffect(() => {
         if (channelChat) {
             channelChat.listen(
                 "NewMessage",
                 (e) => {
                     console.log(e)
                 }
             )
         }
     }, [channelChat]) */
    return (
        <ToastContainer
            position="top-center"
            hideProgressBar
            closeOnClick
            pauseOnHover
            limit={3}
            transition={Slide}

        />
    )
};

export default NotificationsNew;