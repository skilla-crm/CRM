
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Настройки"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Options() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const id = "root_settings"

  return (

    <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_SETTINGS2} srcCss={process.env.REACT_APP_URL_SETTINGS_CSS} id={id} />
    </div>


  );
}
