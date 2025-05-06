
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import dynamic from 'next/dynamic'

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Orders() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('ispro')
  const isBlocked = cookieStore.get('is_blocked')

  if (isBlocked?.value === '1') {
    redirect('/pay')
  }

  return (

    <div id="root_planning" ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_PLANNING} srcCss={process.env.REACT_APP_URL_PLANNING_CSS} id={'planning-page'} />
    </div>




  );
}
