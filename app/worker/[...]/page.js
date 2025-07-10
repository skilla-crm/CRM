
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Исполнитель"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Worker() {
  const id = 'root_worker'
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  redirect(`/performers`)

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_WORKER} srcCss={process.env.REACT_APP_URL_WORKER_CSS} id={id} />
    </div>
  );
}
