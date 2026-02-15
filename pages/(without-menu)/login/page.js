import s from './login.module.scss';
import { cookies } from 'next/headers'
//components
import LoginForm from './ui/LoginForm/LoginForm';

export default async function Login() {
    const cookieStore = await cookies()
    return (
        <div className={s.root}>
            <LoginForm cookieStore={cookieStore}/>
        </div>
    )
};
