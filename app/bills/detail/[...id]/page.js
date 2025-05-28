
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Счета"
};


const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Bills() {
  const id = "root_bills"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
       <DynamicModuleContainer src={process.env.REACT_APP_URL_BILLS} srcCss={process.env.REACT_APP_URL_BILLS_CSS} id={id} />
    </div>
  );
}
