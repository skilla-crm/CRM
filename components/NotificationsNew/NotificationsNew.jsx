'use client'
import s from './NotificationsNew.module.scss';
import { useEffect } from 'react';
import { ToastContainer, toast, Slide } from "react-toastify";
import { usePathname } from 'next/navigation';
//hooks
import useEstablishEventChannel from '@/hooks/useEstablishEventChannel';
import useEstablishChatChannel from '@/hooks/useEstablishChatChannel';
import useEstablishCallChannel from '@/hooks/useEstablishCallChannel';
import useEstablishContactCenterChannel from '@/hooks/useEstablishContactCenterChannel';
//icons
import chatIcon from '@/public/icons/chatIcon.svg';
//components
import CustomToast from '../CustomToast/CustomToast';
import CallToast from '../CallToast/CallToast';
//utils
import { handleNotificationAccesses } from '@/utils/handleNotificationAccesses';

const NotificationsNew = ({ token, user, partnership_id, role, refetchEvents, setEventsLinks }) => {
    const channelEvents = useEstablishEventChannel(token, user, partnership_id);
    const channelChat = useEstablishChatChannel(token, user);
    const channelCall = useEstablishCallChannel(user);
    const channelContactCenter = useEstablishContactCenterChannel(user);
    const path = usePathname();


    useEffect(() => {
        if (channelContactCenter) {
            channelContactCenter.onmessage = function (event) {
                const data = JSON.parse(event.data)
                const handleCloseToast = () => { toast.dismiss('KC') };

                if (data.action === "newCall") {
                   toast(
                        () => {
                            return <CallToast
                                version={'KC'}
                                closeToast={handleCloseToast}
                                buttonClose={false}
                                person={null}
                                icon={null}
                                action={data.action}
                                phone={"+7 (000) 000-00-00"}
                                name={"Неизвестно"}
                                company={null}
                                city={'Иваново'}
                                type="success"
                            />
                        },
                        {
                            toastId: 'KC',
                            autoClose: false,
                            closeButton: false,
                            position: "bottom-right",
                            closeOnClick: false
                        }
                    );
                }


                if (data.action === "connected") {
                    toast.update('KC', {
                        render: () => <CallToast
                            version={'KC'}
                            closeToast={handleCloseToast}
                            buttonClose={false}
                            person={null}
                            icon={null}
                            action={data.action}
                            phone={"+7 (000) 000-00-00"}
                            name={"Неизвестно"}
                            company={null}
                            city={'Иваново'}
                            type="success"
                        />
                    })
                }
            }
        }
    }, [channelContactCenter])



    useEffect(() => {
        if (channelCall) {
            channelCall.onmessage = function (event) {
                const data = JSON.parse(event.data)

                data?.action === 'newCall' && toast(
                    ({ closeToast }) => {
                        return <CallToast
                            closeToast={closeToast}
                            buttonClose={true}
                            person={null}
                            icon={null}
                            action={data?.action}
                            phone={data?.phone}
                            name={data?.name}
                            company={data?.company}
                            city={data?.city}
                            type="success"
                        />
                    },
                    {
                        autoClose: 30000,
                        closeButton: false,
                        position: "bottom-right"
                    }
                );
            };


        }


    }, [channelCall])

    useEffect(() => {

        if (channelEvents?.listen && user?.id) {
            channelEvents.listen(
                "Broadcasting.UserReceivedEvent",
                (e) => {

                    const { description, description_short, person, type, supervisor_id, action } = e;

                    ((description && person?.id !== user.id) || (description_short && person?.id == user.id)) && handleNotificationAccesses(role, person, type, action, description, supervisor_id, user) && toast(
                        ({ closeToast }) => (
                            <CustomToast
                                message={person?.id !== user.id ? description : description_short}
                                closeToast={closeToast}
                                buttonClose={true}
                                person={person?.id !== user.id ? person : null}
                                icon={null}
                                type="success"
                            />
                        ),
                        {
                            position: "top-center",
                            autoClose: person?.id !== user.id ? 5500 : 2500,
                            closeButton: false,
                        }
                    );

                    if (type === 'ORDERS') {
                        refetchEvents()
                    }

                }
            )
        } else {
            console.log('слушатель не подключился')
        }
    }, [channelEvents?.listen, user?.id])

    useEffect(() => {
        if (channelChat/*  && !path.includes('/support/chat') */) {
            channelChat.listen(
                "NewMessage",
                (data) => {
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
            hideProgressBar
            closeOnClick
            newestOnTop
            limit={3}
            transition={Slide}
        /*  stacked */
        />
    )
};

export default NotificationsNew;