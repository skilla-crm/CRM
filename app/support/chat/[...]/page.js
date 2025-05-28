
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

const DynamicModuleContainer = dynamic(() =>
  import('@/components/ModuleContainer/ModuleContainer')
    .then((module) => module.ModuleContainer)
)

export default async function Chat() {
  const id = "root_chat"
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')
  const data = await fetch(`https://lk.skilla.ru/chatv2`)
  const token2 = await data.text()



  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={token2} version={'director'}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_CHAT} srcCss={process.env.REACT_APP_URL_CHAT_CSS} id={id} />
    </div>
  );
}