
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Закупки"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function PurchasesDetail() {
  const id = "root_purchases"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`} isskilla="0">
      <DynamicModuleContainer src={process.env.REACT_APP_URL_PURCHASES} srcCss={process.env.REACT_APP_URL_PURCHASES_CSS} id={id} />
    </div>


  );
}