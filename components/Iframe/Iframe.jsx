
'use client'
import { useState } from 'react'
import s from './Iframe.module.scss'
import classNames from 'classnames'

const Iframe = ({ src, id }) => {
    
    const [load, setLoad] = useState(true)

    const handleLoad = () => {
        setLoad(false)
    }
    return (
        <div className={classNames(s.window, !load && s.window_anim)}>
            <iframe className={s.iframe} src={src} id={id} onLoa onLoadStart={handleLoad} onLoad={handleLoad}></iframe>
        </div>

    );
}

export default Iframe;

