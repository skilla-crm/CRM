
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "База знаний"
};


const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Kb() {
  const id = "root_knowledge"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <>
      <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
        <DynamicModuleContainer src={process.env.REACT_APP_URL_KB} srcCss={process.env.REACT_APP_URL_KB_CSS} id={id} />
      </div>
      <div id="modal-root"></div>
    </>

  );
}