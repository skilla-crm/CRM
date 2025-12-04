
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Банк"
};


const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Bank() {
  const id = "root_bank"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <>
      <div id={id} ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
        <DynamicModuleContainer src={process.env.REACT_APP_URL_BANK_TEST} srcCss={process.env.REACT_APP_URL_BANK_TEST_CSS} id={id} />
      </div>
      <div id="modal-root"></div>
    </>

  );
}
