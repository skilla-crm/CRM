
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Iframe from '@/components/Iframe/Iframe'

export default async function Orders() {
  const src = process.env.REACT_APP_URL_DASHBOARD;
  const id = 'root_dashboard'
  const cookieStore = await cookies()
  const isBlocked = cookieStore.get('is_blocked')

  if (isBlocked?.value === '1') {
    redirect('/pay')
  }

  return (

    <Iframe src={src} id={id} />



  );
}
