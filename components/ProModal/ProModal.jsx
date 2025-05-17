'use client'
import { useRef, useState, useEffect } from 'react';
import s from './ProModal.module.scss';
import Image from 'next/image';
import logo from './image/prologo.png';
import person1 from './image/person1.jpg';
import person2 from './image/person2.jpg';
import person3 from './image/person3.jpg';
import person4 from './image/person4.jpg';
import person5 from './image/person5.jpg';
import person6 from './image/person6.jpg';
import person7 from './image/person7.jpg';
import person8 from './image/person8.jpg';
import person9 from './image/person9.jpg';



function ProModal() {
    const [anim, setAnim] = useState(false)
    const modalRef = useRef()

    const handleOpen = () => {
        setAnim(true)
    }

    const handleClose = () => {
        setAnim(false)
    }

    const closeModal = (e) => {
        e.stopPropagation()
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose()
            return
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => document.removeEventListener('mousedown', closeModal);
    }, []);

    return (
        <>
            <div onClick={handleOpen} id='pro-open'></div>
            <div className={`${s.modalwindow} ${anim && s.modalwindow_anim}`}>

                <div ref={modalRef} className={`${s.promodal} ${anim && s.promodal_anim}`}>
                    <button onClick={handleClose} className={s.promodal__close}></button>
                    <Image src={logo} className={s.promodal__logo} alt='про лого' />
                    <div className={s.promodal__header}>
                        <div className={`${s.promodal__container} ${s.promodal__container_title}`}>
                            <h3 className={s.promodal__title}>Версия для профессионалов своего дела</h3>
                            <p className={`${s.promodal__text} ${s.promodal__text_second}`}>Для специалистов, предпочитающих в работе<br />удобство и
                                эффективность</p>
                        </div>
                        <div className={`${s.promodal__container} ${s.promodal__container_users}`}>
                            <div className={s.promodal__users}>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person1} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person2} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person3} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person4} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person5} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person6} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person7} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person8} />
                                </div>
                                <div className={s.promodal__image}>
                                    <Image alt='партнер' src={person9} />
                                </div>
                            </div>
                            <p className={`${s.promodal__text} ${s.promodal__text_second}`}>Выбор 125 PRO-пользователей</p>
                        </div>
                    </div>


                    <div className={s.promodal__main}>
                        <p className={`${s.promodal__text} ${s.promodal__text_big}`}>Ключевые преимущества:</p>
                        <ul className={s.promodal__advantages}>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Подробная история заказа</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Назначение на заказы из карты</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Уведомление о заказе в Telegram</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Список резерва и ранее назначенных на заказ</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Период редактирования заказов до 60 дней</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Группировка исполнителей</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Статус о прочтении писем клиентами</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Подстановка факсимиле в PDF документы</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Просмотр всех заказов компании</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>СМС при первом обращении и завершении заказа</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Добавление до 100 исполнителей на заказ</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Отсутствие лимита на звонки из приложения</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Отчеты по заказам и документам</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Скидка до 50% на комиссию по выплатам</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Создание заказа на несколько дат</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Расширенные типы заказов</p>
                            </li>
                            <li className={s.promodal__item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8.5L2.5 7L6 10.5L13.5 3L15 4.5L6 13.5L1 8.5Z" fill="#87A2FF" />
                                </svg>
                                <p className={s.promodal__text}>Отображение незавершенных задач</p>
                            </li>

                            <li className={s.promodal__item}>
                                <a target="_blank" href="/new/support/faq" className={`${s.promodal__text} ${s.promodal__text_link}`}>Узнать
                                    подробнее</a>
                            </li>
                        </ul>
                    </div>

                    <div className={s.promodal__footer}>

                        <div className={s.promodal__deadlines}>

                          {/*   <div className={s.promodal__deadline}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="9" r="9" fill="#9397A6"></circle>
                                    <path d="M4.5 8.71875L7.82331 12.0421C7.85207 12.0708 7.89851 12.0714 7.928 12.0434L13.5 6.75" stroke="#F1F4F9" stroke-width="1.8" stroke-linecap="round"></path>
                                </svg>
                                <p className={s.promodal__text}>оплачена до 5 января 2026</p>
                            </div> */}
                        </div>

                        <a target="_blank" href="https://skilla.ru/oferta_new2/" className={`${s.promodal__offer} ${s.promodal__text_second} ${s.promodal__text}`}>
                            Публичная оферта ООО “Скилла Инновации”
                        </a>
                    </div>
                </div>
            </div >
        </>


    )
};

export default ProModal;