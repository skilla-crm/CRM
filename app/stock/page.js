
import { cookies } from 'next/headers'
import ModuleContainer from "@/components/ModuleContainer/ModuleContainer";

export const metadata = {
  title: "Склад"
};

export default async function Orders() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('is_pro')

  return (
    <div id="root_orders_dir" ispro={ispro?.value} role={role?.value} token={`Bearer ${token?.value}`}>
      <ModuleContainer src={process.env.REACT_APP_URL_ORDERS} srcCss={process.env.REACT_APP_URL_ORDERS_CSS} id={'orders-page'} />
    </div>




  );
}
