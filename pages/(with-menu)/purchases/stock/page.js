
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import MenuPurchases from '@/components/MenuPurchases/MenuPurchases'

export const metadata = {
  title: "Склад"
};


const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Stock() {
  const id = "root_stock"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <>
      <MenuPurchases role={role?.value}/>
      <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`} isskilla="0">
        <DynamicModuleContainer src={process.env.REACT_APP_URL_STOCK} srcCss={process.env.REACT_APP_URL_STOCK_CSS} id={id} />
      </div>
    </>



  );
}