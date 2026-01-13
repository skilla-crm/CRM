import s from './login.module.scss';
//components
import LoginForm from '@/components/LoginForm/LoginForm';

export default async function Login() {
    return (
        <div className={s.root}>
            <LoginForm />
        </div>
    )
};
