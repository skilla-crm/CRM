'use client'
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const ModuleContainer = ({ src, srcCss, id }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParamsType = useSearchParams().get('type');
  const searchParamsDate = useSearchParams().get('date');

  console.log(searchParamsType, path, searchParamsDate)

  useEffect(() => {
    if(path === '/orders') {
      router.push(path)
      return
    }

    if(path === '/orders/create') {
      router.push(path)
      return
    }

    if(path.includes('/orders/edit')) {
      router.push(path)
      return
    }

    if(path.includes('/orders/order_detail/') && id === 'root_order-create') {
      router.push(path)
      return
    }


    if(searchParamsType && id === 'root_order-create') {
      router.push(`${path}?type=preorder&date=${searchParamsDate}`)
      return
    }

    if(searchParamsDate && id === 'root_order-create') {
      router.push(`${path}?date=${searchParamsDate}`)
      return
    }

  }, [path])

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
