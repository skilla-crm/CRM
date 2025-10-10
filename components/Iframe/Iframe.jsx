
'use client'
import { useEffect, useState, useContext } from 'react'
import s from './Iframe.module.scss'
import classNames from 'classnames'
import { MenuContext } from "@/contexts/MenuContext";
//components
import SkeletonDashboard from '../Skeletons/SkeletonDashboard/SkeletonDashboard';
import SkeletonСounterparties from '../Skeletons/SkeletonСounterparties/SkeletonСounterparties';
import SkeletonSettings from '../Skeletons/SkeletonSettings/SkeletonSettings';
import SkeletonLogs from '../Skeletons/SkeletonLogs/SkeletonLogs';

const Iframe = ({ src, id, noPartner }) => {
    const { activeCompanyId } = useContext(MenuContext);
    const [load, setLoad] = useState(true)
    const [anim, setAnim] = useState(false)
    const [hiddenIframeMenu, setHiddenIframeMenu] = useState(false)
    /*  const [link, setLink] = useState('') */


    useEffect(() => {
        const getCookieDocument = () => {
            let cookie = document.cookie.split('; ').find(row => row.startsWith('hidemenu' + '='));
            return cookie ? cookie.split('=')[1] : null;
        }

        const hiddenMenu = getCookieDocument()
        setHiddenIframeMenu(hiddenMenu === '1')
    }, [])


    useEffect(() => {
        const item = document.getElementById(id);

        if (item) {
            item.onload = () => {
                setLoad(false)
            }
        } else {
            setLoad(true)
        }
    }, [])




    useEffect(() => {
        setTimeout(() => {
            setAnim(true)
        }, 50)
    }, [])


    useEffect(() => {
        setLoad(true)
        /*   if (activeCompanyId) {
              setLink(`/?cur_partnership=${activeCompanyId}`)
          } else {
              setLink('')
          } */
    }, [activeCompanyId])

    return (
        <div className={classNames(s.window, anim && s.window_anim)}>
            <div className={classNames(s.sceleton, !load && s.sceleton_hidden)}>
                {id === 'root_dashboard' && <SkeletonDashboard />}
                {id === 'root_counterparties' && <SkeletonСounterparties />}
                {id === 'root_settings' && <SkeletonSettings />}
                {id === 'root_logs' && <SkeletonLogs />}
            </div>

            <iframe
                loading="eager"
                className={classNames(s.iframe, hiddenIframeMenu && s.iframe_hidden)}
                src={`${src}${noPartner ? '' : `/?cur_partnership=${activeCompanyId}`}`}
                id={id}
            ></iframe>
        </div>

    );
}

export default Iframe;

