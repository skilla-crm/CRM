'use client'
import s from './LoginOverlay.module.scss';

const LoginOverlay = () => {
    return (

        <video className={s.video} autoPlay loop muted playsInline src={'https://lk.skilla.ru/design/skilla/login/bg-video/evening.mp4'}></video>

    )
};

export default LoginOverlay;