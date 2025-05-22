
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Календарь событий"
};

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Calendar() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const id = "root_calendar"

  return (

    <div style={{maxHeight: '100vh', overflow: 'auto'}} id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_CALENDAR} srcCss={process.env.REACT_APP_URL_CALENDAR_CSS} id={id} />
    </div>


  );
}
