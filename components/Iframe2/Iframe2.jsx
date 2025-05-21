
'use client'
import { useEffect, useState, useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import s from './Iframe2.module.scss'
import classNames from 'classnames'
import { MenuContext } from "@/contexts/MenuContext";

const Iframe = ({ src, id }) => {
    const { activeCompanyId } = useContext(MenuContext);
    const [load, setLoad] = useState(true)
    const [anim, setAnim] = useState(false)
     const [hiddenIframeMenu, setHiddenIframeMenu] = useState(false)
    const item = document.getElementById(id);
    const searchParams = useSearchParams()
    const orderId = searchParams.get('order_id')

    useEffect(() => {
        const getCookieDocument = () => {
            let cookie = document.cookie.split('; ').find(row => row.startsWith('hidemenu' + '='));
            return cookie ? cookie.split('=')[1] : null;
        }

        const hiddenMenu = getCookieDocument()
        setHiddenIframeMenu(hiddenMenu === '1')
    }, [])

    useEffect(() => {
        if (item) {
            item.onload = () => {
                setLoad(false)
            }
        } else {
            setLoad(true)
        }
    }, [item])




    useEffect(() => {
        setTimeout(() => {
            setAnim(true)
        }, 50)
    }, [])


    return (
        <div className={classNames(s.window, anim && s.window_anim)}>
            <iframe
                loading="eager"
              className={classNames(s.iframe, hiddenIframeMenu && s.iframe_hidden)}
                src={`${src}${`?order_id=${orderId}`}`}
                id={id}
            ></iframe>
        </div>

    );
}

export default Iframe;

