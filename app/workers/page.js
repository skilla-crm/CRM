
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Исполнители"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Workers() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  redirect(`/performers`)

  return (
    <div id="root_list_workers" ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_WORKERS} srcCss={process.env.REACT_APP_URL_WORKERS_CSS} id={'workers-page'} />
    </div>
  );
}
