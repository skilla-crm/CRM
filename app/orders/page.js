
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'


const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Orders() {
  const id = "root_orders_dir"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_ORDERS} srcCss={process.env.REACT_APP_URL_ORDERS_CSS} id={id} />
    </div>
  );
}
