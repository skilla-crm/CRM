
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import MenuPurchases from '@/components/MenuPurchases/MenuPurchases';

export const metadata = {
  title: "Ручной учет"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function PurchasesManual() {
  const id = "root_purchases"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <>
      <MenuPurchases />
      <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`} isskilla="0">
        <DynamicModuleContainer src={process.env.REACT_APP_URL_PURCHASES} srcCss={process.env.REACT_APP_URL_PURCHASES_CSS} id={id} />
      </div>
    </>
  );
}