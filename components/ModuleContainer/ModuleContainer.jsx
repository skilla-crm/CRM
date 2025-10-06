'use client'
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';


export const ModuleContainer = ({ src, srcCss, id }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParamsType = useSearchParams().get('type');
  const searchParamsDate = useSearchParams().get('date');
  const version = 122;


  useEffect(() => {
    if (path === '/orders/create') {
      router.push(path)
      return
    }

    if (path.includes('/orders/edit')) {
      router.push(path)
      return
    }

      if (path.includes('/orders2/edit')) {
      router.push(path)
      return
    }

    if (path.includes('/orders/order_detail/') && id === 'root_order-create') {
      router.push(path)
      return
    }

     if (path.includes('/orders2/order_detail/') && id === 'root_order-create') {
      router.push(path)
      return
    }
  
    if (path.includes('/orders/repeat/')) {
      router.push(path)
      return
    }

      if (path.includes('/orders2/repeat/')) {
      router.push(path)
      return
    }



    if (searchParamsType && id === 'root_order-create') {
      router.push(`${path}?type=preorder&date=${searchParamsDate}`)
      return
    }

    if (searchParamsDate && id === 'root_order-create') {
      router.push(`${path}?date=${searchParamsDate}`)
      return
    }

    if (path === '/orders') {
      router.push(path)
      return
    }

    
    if (path === '/orders2') {
      router.push(path)
      return
    }

    if (path === '/workers/add') {
      router.push(path)
      return
    }

    if (path.includes('/worker/')) {
      router.push(path)
      return
    }


    if (path === '/purchases') {
      router.push(path)
      return
    }

    if (path === '/purchases/stock') {
      router.push(path)
      return
    }



    if (path.includes('/purchases/manual')) {
      router.push(path)
      return
    }


    if (path.includes('/upd/manual')) {
      router.push(path)
      return
    }
/* 
   if (path.includes('/options/')) {
      router.push(path)
      return
    } */

  }, [path])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${src}?v=${version}`;
    script.defer = true;
    const link = document.createElement('link');
    link.href = `${srcCss}?v=${version}`;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      if (script && script.parentNode) {
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
