'use client'
import s from './LoginForm.module.scss';
import { createCookies } from '@/actions';
import { redirect } from 'next/navigation';

const LoginForm = () => {
    const handleLogin = async () => {
        await createCookies()
        redirect('/dashboard')
    }
    return (
        <div>
            <button onClick={handleLogin}>Войти</button>
        </div>
    )
};

export default LoginForm;