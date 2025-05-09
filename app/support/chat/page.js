
import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Чат"
};

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

  const data = await fetch(`https://lk.dev.skilla.ru/chat-token/index.php?token=206|WWD8pp4txzqhznnu8u1L3ESM95KXV3hTYjBh4Rm7`)
  const token2 = await data.json();
  console.log(token2.token)


  return (
    <div id={id} ispro={ispro?.value} role={role?.value} token={token2.token} version={'director'}>
      <DynamicModuleContainer src={process.env.REACT_APP_URL_CHAT} srcCss={process.env.REACT_APP_URL_CHAT_CSS} id={id} />
    </div>
  );
}