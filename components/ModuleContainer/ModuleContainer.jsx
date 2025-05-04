'use client'
import { useEffect, useState } from "react";

export const ModuleContainer = ({ src, srcCss, id }) => {
  const [anim, setAnim] = useState(false)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    const link = document.createElement('link');
    link.href = srcCss;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.onload = () => setAnim(true)

    document.head.appendChild(link);

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document?.body?.removeChild(script);
      }

      if (link.parentNode) {
        document?.head?.removeChild(link);
      }
    }
  }, [])

  return (
    <>
    </>

  )
};
