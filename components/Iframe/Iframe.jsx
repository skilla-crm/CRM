
'use client'
import { useEffect, useState, useContext } from 'react'
import s from './Iframe.module.scss'
import classNames from 'classnames'
import { MenuContext } from "@/contexts/MenuContext";
//components
import SkeletonDashboard from '../Skeletons/SkeletonDashboard/SkeletonDashboard';

const Iframe = ({ src, id }) => {
    const { activeCompanyId } = useContext(MenuContext);
    const [load, setLoad] = useState(true)
    const [anim, setAnim] = useState(false)
    const [link, setLink] = useState('')
    const item = document.getElementById(id);
    useEffect(() => {
        console.log(item)
        if (item) {
            item.onload = () => {
                setLoad(false)
            }
        }
    }, [item])


    useEffect(() => {
        setTimeout(() => {
            setAnim(true)
        })
    }, [])


    useEffect(() => {
        if (activeCompanyId) {
            setLink(`/?cur_partnership=${activeCompanyId}`)
        } else {
            setLink('')
        }
    }, [activeCompanyId])

    return (
        <div className={classNames(s.window, anim && s.window_anim)}>
            <div className={classNames(s.sceleton, !load && s.sceleton_hidden)}>
                {id === 'root_dashboard' && <SkeletonDashboard />}
            </div>

            <iframe
                loading="eager"
                className={s.iframe}
                src={`${src}${link}`}
                id={id}
            ></iframe>
        </div>

    );
}

export default Iframe;

