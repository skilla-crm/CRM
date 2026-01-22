import { useEcho } from '@laravel/echo-react';
import s from './InputEmail.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const emailValidate = (value) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (value.match(isValidEmail)) {
        return true
    } else {
        return false
    }
}

const InputEmail = ({ email, setEmail, disabled, placeholder, width, validate, setValidate, errorRequired, setErrorRequired }) => {
    const [errorValidate, setErrorValidate] = useState(false);


    useEffect(() => {
    
        if (!emailValidate(email)) {
            setValidate(false)
        } else {
            setValidate(true)
        }
    }, [email])

    const handleEmail = (e) => {
        const value = e.currentTarget.value;
        console.log(value)
        setEmail(value)

        if (value.length === 0) {
            setValidate(false)
            return
        }

    }

    const handleBlur = () => {
        setTimeout(() => {
            setErrorValidate(validate)
        }, 150)


}
/* 
const handleFocus = () => {
    setErrorValidate(false)
} */

const handleDomains = (e) => {
    const text = e.target.textContent;
    setEmail(prevState => prevState + text)
    setErrorValidate(false)
}

return (
    <div className={s.root}>
        <input
            style={{ width: width ? `${width}px` : '100%' }}
            disabled={disabled}
            className={classNames(s.input, (errorValidate || errorRequired) && s.input_error)}
            onChange={handleEmail}
            onBlur={handleBlur}
         /*    onFocus={handleFocus} */
            value={email || ''}
            placeholder={placeholder}
        ></input>



        <div className={classNames(s.error, (errorValidate || errorRequired) && s.error_vis)}>
            {errorValidate && <p>Неверный формат эл. адреса</p>}
            {errorRequired && <p>Заполни эл. почту</p>}
        </div>

        <div onClick={handleDomains} className={s.domains}>
            <p>@gmail.com</p>
            <p>@mail.ru</p>
            <p>@yandex.ru</p>
        </div>

    </div>

)
};

export default InputEmail;