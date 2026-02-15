import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Создание заказа"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Create() {
  const cookieStore = await cookies()
  const token = cookieStore?.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const id = "order_create"

  return (

    <div id={`root_${id}`} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer id={id} />
    </div>


  );
}



