
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Планирование"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Orders() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <div id="root_planning" ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_PLANNING_NEW} srcCss={process.env.REACT_APP_URL_PLANNING_NEW_CSS} id={'planning-page'} />
    </div>




  );
}
