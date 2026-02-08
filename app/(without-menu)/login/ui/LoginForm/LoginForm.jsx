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

const LoginForm = ({cookieStore}) => {
    const { trigger, isMutating } = useSWRMutation(`${baseURL}login`, sendRequest)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = /* async */ () => {
        Cookies.set('token', '234234', {
            expires: 365,
            httpOnly: false, // доступно только для JavaScript
          });
      /*  const res = await trigger({ login, password })
       console.log(res) */
    }

    const getCookie = () => {
        const username = Cookies.get('token');
        console.log(username);
      };

    /*    isMutating && redirect('/dashboard') */

    return (
        <div className={s.root}>
            <LoginOverlay />
            <div className={s.form}>
                <InputText text={login} setText={setLogin} />
                <InputPassword password={password} setPassword={setPassword} />
                <button onClick={handleLogin}>Войти</button>
                <button onClick={getCookie}>Вой2222ти</button>
            </div>

        </div>
    )
};

export default LoginForm;