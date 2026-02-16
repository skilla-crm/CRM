
import s from './layout.module.scss';
//components
import Menu from "@/components/Menu/Menu";



export const viewport = {
  width: '1900',
  initialScale: 0,
}


export default async function MenuLayout({ children, params }) {

  return (
    <>
      <Menu />
      <div className={s.container}>
        {children}
      </div>

    </>
  );
}
