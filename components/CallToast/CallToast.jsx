import s from './CallToast.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import IconPhone from '@/public/icons/iconPhone.svg';
import Point from '@/public/icons/point.svg';
import IconClose from '@/public/icons/iconCloseGrey.svg';
import IconColapse from '@/public/icons/iconChewronForward.svg';
//Api
import { sendContact, sendRequsites, sendComment } from '@/api/api';

//components 
import InputEmail from '../InputEmail/InputEmail';
import TextArea from '../TextArea/TextArea';

const CallToast = ({ userName, phone, name, call_id, entry_id, company, companyId, city, version, action, partnership, closeToast, /* handleColapse, colapse  */ }) => {
    const path = usePathname();
    const [activeFunction, setActiveFunction] = useState(0);
    const [email, setEmail] = useState('');
    const [validateEmail, setValidateEmail] = useState(false);
    const [comment, setComment] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [colapse, setColapse] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (path === '/orders/create') {
            setColapse(true)
        }
    }, [path])

    useEffect(() => {
        if ((activeFunction == 1 || activeFunction == 2) && !validateEmail) {
            setButtonDisabled(true)
            return
        }

        if (activeFunction == 3 && comment.length === 0) {
            setButtonDisabled(true)
            return
        }

        setButtonDisabled(false)

    }, [activeFunction, email, validateEmail, comment])

    const handleColapse = () => {
        setColapse(!colapse)
    }

    const handleSelectFunction = (e) => {
        const id = e.currentTarget.id;
        setActiveFunction(id)
    }

    const handleSend = () => {
        if (activeFunction == 1) {
            const partnership_id = partnership?.id
            const res = sendContact(email, partnership_id, call_id, entry_id, phone)
            res && closeToast()
            console.log(res)
            return
        }

        if (activeFunction == 2) {
            const partnership_id = partnership?.id
            const res = sendRequsites(email, partnership_id, call_id, entry_id, phone)
            res && closeToast()
            console.log(res)
            return
        }

        if (activeFunction == 3) {
               const partnership_id = partnership?.id
            const res = sendComment(comment, partnership_id, call_id, entry_id, name, phone)
            res && closeToast()
            return
        }
    }

    const handleCreate = () => {
        const params = new URLSearchParams();
        params.set('partnershipId', partnership?.id);
        params.set('companyId', companyId);
        params.set('phone', phone);
        params.set('name', name);
        router.push(`/orders/create?${params}`)
    }


    const handleBack = () => {
        setActiveFunction(0)
    }

    return (
        <div className={s.root}>
            <IconPhone className={s.icon} />
            <div className={s.block}>
                <div className={s.top}>
                    <p className={s.first}>
                        {action === 'connected' ? 'Звонок' : 'Входящий вызов'}
                    </p>
                </div>

                <p className={s.first}>{name ? name : ''} {phone ? phone : ''}</p>
                <div className={s.bottom}>
                    <p className={s.second}>{city} <span> {company ? '• ' : ''}</span>{company?.includes('<br>') ? company?.split('<br>')?.shift() : company}</p>

                    {version === 'KC' && <p className={s.second}>{partnership?.name}</p>}
                </div>

                {version === 'KC' && <div className={classNames(s.block, s.block_kc)}>
                    {action === 'newCall' ? <p>Менеджер {userName}, здравствуйте</p> :
                        <p>Улыбайтесь во время разговора!</p>}

                </div>}


                {version === 'KC' &&
                    <div className={s.slider}>
                        <div style={{ transform: `translateX(${activeFunction > 0 ? -320 : 0}px)` }} className={classNames(classNames(s.actions, action === 'connected' && !colapse && s.actions_open))}>
                            <div className={classNames(s.slide, activeFunction > 0 && s.slide_hidden)}>

                                {path !== '/orders/create' && <button onClick={handleCreate} className={s.button}>Создать заказ</button>}
                                <button id={1} onClick={handleSelectFunction} className={s.button}>Отправить Email с контактами</button>

                                <button id={2} onClick={handleSelectFunction} className={s.button}>Отправить Email с реквизитами</button>

                                <button id={3} onClick={handleSelectFunction} className={s.button}>Создать обращение</button>
                            </div>
                            <div className={classNames(s.slide, activeFunction < 0 && s.slide_hidden)}>

                                <div className={s.container}>
                                    <span>
                                        {activeFunction == 1 && 'Отправить контакты партнера'}
                                        {activeFunction == 2 && 'Отправить реквизиты партнера'}
                                        {activeFunction == 3 && 'Отправить обращение'}
                                    </span>
                                    {activeFunction == 3 &&
                                        <TextArea
                                            value={comment}
                                            setValue={setComment}
                                            rows={3}
                                        />}
                                    {activeFunction > 0 && activeFunction < 3 &&
                                        <InputEmail
                                            email={email}
                                            setEmail={setEmail}
                                            placeholder={'email'}
                                            validate={validateEmail}
                                            setValidate={setValidateEmail}
                                        />
                                    }



                                    {activeFunction > 0 && <div className={s.buttons}>
                                        <button onClick={handleBack} className={classNames(s.button, s.button_second)}> Назад</button>
                                        <button disabled={buttonDisabled} onClick={handleSend} className={s.button}>Отправить</button>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>


            <div className={s.buttons_top}>
                {version === 'KC' && action === 'connected' && <div onClick={handleColapse} className={classNames(s.collapse, colapse && s.collapse_hidden)}>
                    <IconColapse />
                </div>}
                <div onClick={closeToast} className={s.close}>
                    <IconClose className={s.close} />
                </div>
            </div>
        </div>
    )
};

export default CallToast;