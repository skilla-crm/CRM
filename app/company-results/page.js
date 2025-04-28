
import { cookies } from 'next/headers'
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
  const id = 'root_company-results'

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={token?.value}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_RESULT}  srcCss={process.env.REACT_APP_URL_RESULT_CSS} id={id}/>
    </div>
  );
}