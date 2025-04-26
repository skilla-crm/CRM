
import { cookies } from 'next/headers'
import Iframe from '@/components/Iframe/Iframe'

export default async function Orders() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const role = cookieStore.get('role')
  const ispro = cookieStore.get('ispro')

  return (
    
      <Iframe/>
   
    

  );
}
