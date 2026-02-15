
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Добавление исполнителя"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function WorkerAdd() {
  const id = "root_createWorker"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  redirect(`/performers/add`)

  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_WORKERS_ADD} srcCss={process.env.REACT_APP_URL_WORKERS_ADD_CSS} id={id} />
    </div>
  );
}
