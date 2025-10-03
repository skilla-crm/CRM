
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

export const metadata = {
  title: "Оплата услуг"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Pay() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const id = "root_payment"

  if (role?.value === 'supervisor') {
    redirect('/orders')
  }

   if (role?.value === 'operator') {
    redirect('/orders')
  }

  return (

    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_PAY} srcCss={process.env.REACT_APP_URL_PAY_CSS} id={id} />
    </div>


  );
}
