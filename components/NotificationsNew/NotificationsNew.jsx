'use client'
import s from './NotificationsNew.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast, Slide } from "react-toastify";
//hooks
import useEstablishEventChannel from '@/hooks/useEstablishEventChannel';
import useEstablishChatChannel from '@/hooks/useEstablishChatChannel';
//components
import CustomToast from '../CustomToast/CustomToast';
//utils
import { handleNotificationAccesses } from '@/utils/handleNotificationAccesses';

const NotificationsNew = ({ token, user, partnership_id, role }) => {
    const channelEvents = useEstablishEventChannel(token, user, partnership_id)
    const channelChat = useEstablishChatChannel(token, user)

   /*  useEffect(() => {
        if (channelEvents) {
            channelEvents.listen(
                "Broadcasting.UserReceivedEvent",
                (data) => {
                    const { description, description_short, person, type, supervisor_id, action } = data;
         

                        (description || description_short) && handleNotificationAccesses(role, person, type, action, description, supervisor_id, user) && toast(
                            ({ closeToast }) => (
                                <CustomToast
                                    message={person?.id !== user.id ? description : description_short}
                                    closeToast={closeToast}
                                    buttonClose={type === 'AUTOSELECT' ? null : true}
                                    person={person?.id !== user.id ? person : null}
                                      icon={null}
                                    type="success"
                                />
                            ),
                            {
                                autoClose: person?.id !== user.id ? 5500 : 2500,
                                closeButton: false,
                            }
                        );



                }
            )
        }
    }, [channelEvents]) */

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