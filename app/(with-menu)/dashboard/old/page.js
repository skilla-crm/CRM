import Iframe from '@/components/Iframe/Iframe';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


export const metadata = {
  title: "Дашборд"
};

export default async function Dashboar() {
  const cookieStore = await cookies()
  const role = cookieStore.get('role')
  const src = process.env.REACT_APP_URL_DASHBOARD_OLD;
  const id = 'root_dashboard'

  if (role?.value === 'accountant') {
    redirect('/orders')
  }

  return (
    <Iframe src={src} id={id} />
  );
}
