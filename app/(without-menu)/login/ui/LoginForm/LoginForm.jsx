'use client'
import s from './LoginForm.module.scss';
import Cookies from 'js-cookie'
import { redirect } from 'next/navigation';
import useSWRMutation from 'swr/mutation'
//api
import { sendRequest } from '@/api/api';
//components
import LoginOverlay from '../LoginOverlay/LoginOverlay';
import InputPassword from '../InputPassword/InputPassword';
import InputText from '../InputText/InputText';
import { useState } from 'react';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const LoginForm = () => {
    const { trigger, isMutating } = useSWRMutation(`${baseURL}login`, sendRequest)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidate, setPasswordValidate] = useState(false)

    const handleLogin = async () => {

        const res = await trigger({ login, password })
        const data = res.data;
        const success = res.success;
        if (success) {

            if(data.is_moderator) {
                console.log('это модератор')
                return
            }

            Cookies.set('token', data.token, {
                expires: 365,
                httpOnly: false
            });

            Cookies.set('role', 'director', {
                expires: 365,
                httpOnly: false
            });

            redirect('/dashboard')
        }
    }
    return (
        <div className={s.root}>
            <LoginOverlay />
            <div className={s.form}>
                <InputText text={login} setText={setLogin} />
                <InputPassword password={password} setPassword={setPassword} setValidate={setPasswordValidate} />
                <button onClick={handleLogin}>Войти</button>
                
            </div>

        </div>
    )
};

export default LoginForm;