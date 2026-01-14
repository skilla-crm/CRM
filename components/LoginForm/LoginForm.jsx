'use client'
import s from './LoginForm.module.scss';
import { createCookies } from '@/actions';
import { redirect } from 'next/navigation';
//components
import LoginOverlay from '../LoginOverlay/LoginOverlay';

const LoginForm = () => {
    const handleLogin = async () => {
        await createCookies()
        redirect('/dashboard')
    }
    return (
        <div className={s.root}>
            <LoginOverlay />
            <div className={s.form}>
                <button onClick={handleLogin}>Войти dfg dfg dg dfg</button>
            </div>

        </div>
    )
};

export default LoginForm;