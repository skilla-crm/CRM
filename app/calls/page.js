import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Звонки"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Calls() {
  const id = 'root_calls'
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (

    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_CALLS} srcCss={process.env.REACT_APP_URL_CALLS_CSS} id={id} />
    </div>


  );
}
