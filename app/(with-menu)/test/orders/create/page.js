import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import { ModuleContainer } from '@/components/ModuleContainer/ModuleContainer';

export const metadata = {
  title: "Создание заказа"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Create() {
  const id = "root_order-create"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_ORDER_CREATE_TEST} srcCss={process.env.REACT_APP_URL_ORDER_CREATE_TEST_CSS} id={id} />
    </div>


  );
}


