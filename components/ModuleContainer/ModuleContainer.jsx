'use client'
import { useEffect } from "react";

export const ModuleContainer = ({ src, srcCss, id }) => {
  console.log('монтировался')

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    const link = document.createElement('link');
    link.href = srcCss;
    link.rel = 'stylesheet';
    link.type = 'text/css';

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

/* export default ModuleContainer; */