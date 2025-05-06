
'use client'
import { useEffect, useState, useContext } from 'react'
import s from './Iframe.module.scss'
import classNames from 'classnames'
import { MenuContext } from "@/contexts/MenuContext";

const Iframe = ({ src, id }) => {
    const  {activeCompanyId} = useContext(MenuContext);
    const [load, setLoad] = useState(true)
    const [link, setLink] = useState('')
    console.log('активный id', activeCompanyId)


    useEffect(() => {
        if (activeCompanyId) {
            setLink(`/?cur_partnership=${activeCompanyId}`)
        } else {
            setLink('')
        }
    }, [activeCompanyId])


    const handleLoad = () => {
        setLoad(false)
    }
    return (
        <div className={classNames(s.window,/*  !load && */ s.window_anim)}>
            <iframe
             loading="eager"
                className={s.iframe}
                src={`${src}${link}`}
                id={id}
                onLoad={handleLoad}
            ></iframe>
        </div>

    );
}

export default Iframe;

