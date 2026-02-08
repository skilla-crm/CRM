import s from './InputPassword.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
//icons
import IconEye from './assets/iconEye.svg';

const passwordValidate = (value) => {
    if (value.length >= 6) {
        return true
    } else {
        return false
    }
}

const InputPassword = ({ password, setPassword, disabled, placeholder, width, setValidate, errorRequired, setErrorRequired }) => {
    const [errorValidate, setErrorValidate] = useState(false);
    const [passwordButton, setPasswordButton] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    const [focus, setFocus] = useState(false);

    console.log(viewPassword)

    const handlePassword = (e) => {
        const value = e.currentTarget.value;
        setPassword(value)

        if (value.length === 0) {
            setValidate(false)
            setPasswordButton(false)
            return
        }
        if (value.length > 0) {
            setPasswordButton(true)
        }
        if (value.length > 0 && !passwordValidate(value)) {
            setValidate(false)
        } else {
            setValidate(true)
        }
    }

    const handleBlur = () => {
        setFocus(false)
        if (password.length > 0 && !passwordValidate(password)) {
            setErrorValidate(true)
        }
    }

    const handleFocus = () => {
        setFocus(true)
        setErrorValidate(false)
        setErrorRequired && setErrorRequired(false)
    }

    const handleViewPassword = () => {
        if (!viewPassword) {
            setViewPassword(true)

            setTimeout(() => {
                setViewPassword(false)
            }, 1000)
            return
        }

    }

    return (
        <div style={{ width: width ? `${width}px` : '100%' }} className={s.root}>
            <div className={classNames(s.field, disabled && s.field_disabled, focus && s.field_focus, errorValidate && s.field_error)}>
                <input
                    type={viewPassword ? 'text' : 'password'}
                    disabled={disabled}
                    className={s.input}
                    onChange={handlePassword}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={password || ''}
                    placeholder={placeholder}
                ></input>
                <button onClick={handleViewPassword} className={classNames(s.button, !passwordButton && s.button_hidden)}><IconEye /></button>
            </div>



            <div className={classNames(s.error, errorValidate && s.error_vis)}>
                {errorValidate && <p>Не менее 6 символов</p>}
            </div>

        </div>

    )
};

export default InputPassword;