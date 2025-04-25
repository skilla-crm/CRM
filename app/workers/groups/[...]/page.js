
import { cookies } from 'next/headers'
import ModuleContainer from "@/components/ModuleContainer/ModuleContainer";

export default async function Orders() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('ispro')
  const id = "root_groups"

  return (

    <div id={id} ispro={ispro?.value} role={role?.value} token={token?.value}>
      <ModuleContainer src={process.env.REACT_APP_URL_GROUPS} srcCss={process.env.REACT_APP_URL_GROUPS_CSS} id={id} />
    </div>




  );
}
