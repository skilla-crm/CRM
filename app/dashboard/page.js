import Iframe from '@/components/Iframe/Iframe';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
const role = cookieStore.get('role')

export const metadata = {
  title: "Дашборд"
};

export default async function Dashboar() {
  const src = process.env.REACT_APP_URL_DASHBOARD;
  const id = 'root_dashboard'

  if (role?.value === 'accountant') {
    redirect('/orders')
  }
  
  return (
    <Iframe src={src} id={id} />
  );
}
