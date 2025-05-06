
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import dynamic from 'next/dynamic'


const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Purchases() {
  const id = "root_purchases"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const isBlocked = cookieStore.get('is_blocked')

  if (isBlocked?.value === '1') {
    redirect('/pay')
  }

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`} isskilla="0">
      <DynamicModuleContainer src={process.env.REACT_APP_URL_PURCHASES} srcCss={process.env.REACT_APP_URL_PURCHASES_CSS} id={id} />
    </div>


  );
}