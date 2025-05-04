
import Iframe from '@/components/Iframe/Iframe'

export default async function Settings({value}) {
  console.log(value)
  const src = process.env.REACT_APP_URL_SETTINGS;
  const id = 'root_settings'

  return (
    <Iframe src={src} id={id}/>
  );
}
