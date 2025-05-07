import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Create() {
  const id = "root_order-create"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('ispro')

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_ORDER_CREATE} srcCss={process.env.REACT_APP_URL_ORDER_CREATE_CSS} id={id} />
    </div>


  );
}


