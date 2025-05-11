
import Iframe from '@/components/Iframe/Iframe'

export default async function Orders() {
  const src = process.env.REACT_APP_URL_FAQ;
  const id = 'root_faq'

  return (

    <Iframe src={src} id={id}/>



  );
}
