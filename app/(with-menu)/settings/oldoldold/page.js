
import Iframe from '@/components/Iframe/Iframe'

export const metadata = {
  title: "Настройки"
};

export default async function Settings() {
  const src = process.env.REACT_APP_URL_SETTINGS;
  const id = 'root_settings'
  
  return (
    <Iframe src={src} id={id} />
  );
}
