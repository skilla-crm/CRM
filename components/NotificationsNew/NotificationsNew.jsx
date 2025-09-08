'use client'
import s from './NotificationsNew.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast, Slide } from "react-toastify";
import { usePathname } from 'next/navigation';
//hooks
import useEstablishEventChannel from '@/hooks/useEstablishEventChannel';
import useEstablishChatChannel from '@/hooks/useEstablishChatChannel';
//icons
import chatIcon from '@/public/icons/chatIcon.svg';
//components
import CustomToast from '../CustomToast/CustomToast';
//utils
import { handleNotificationAccesses } from '@/utils/handleNotificationAccesses';

const NotificationsNew = ({ token, user, partnership_id, role, refetchEvents, setEventsLinks }) => {
    const channelEvents = useEstablishEventChannel(token, user, partnership_id);
    const channelChat = useEstablishChatChannel(token, user);
    const path = usePathname();

    useEffect(() => {
        if (channelEvents) {
            channelEvents.listen(
                "Broadcasting.UserReceivedEvent",
                (data) => {
                    console.log(data)
                    const { description, description_short, person, type, supervisor_id, action } = data;

                    if (type === 'ORDERS') {
                        console.log('рефетч')
                        refetchEvents()
                    }


                    ((description && person?.id !== user.id) || (description_short && person?.id == user.id)) && handleNotificationAccesses(role, person, type, action, description, supervisor_id, user) && toast(
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
    }, [channelEvents])

    useEffect(() => {
        if (channelChat/*  && !path.includes('/support/chat') */) {
            channelChat.listen(
                "NewMessage",
                (data) => {
                    console.log(data)
                    const { message } = data;
                    const { text, user } = message;




                    if (user?.role === 'support') {
                        setEventsLinks(prevState => [...prevState, '/support/chat'])
                        toast(
                            ({ closeToast }) => (
                                <CustomToast
                                    message={text}
                                    closeToast={closeToast}
                                    buttonClose={true}
                                    person={{ name: `Cпециалист поддержки ${user?.name} ${user?.surname}` }}
                                    Icon={chatIcon}
                                    type="success"
                                />
                            ),
                            {
                                autoClose: 5500,
                                closeButton: false,
                            }
                        );
                    }


                }
            )
        }
    }, [channelChat])

    useEffect(() => {
        if (path.includes('/support/chat')) {
            setEventsLinks(prevState => [...prevState.filter(el => el !== '/support/chat')])
        }
    }, [path])


    return (
        <ToastContainer
            position="top-center"
            hideProgressBar
            closeOnClick
            newestOnTop
            /*  pauseOnHover */
            /*     pauseOnFocusLoss */
            limit={3}
            transition={Slide}
        />
    )
};

export default NotificationsNew;