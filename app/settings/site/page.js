
import Iframe from '@/components/Iframe/Iframe'
import s from './site.module.scss';

export const metadata = {
  title: "Настройки"
};

export default async function Settings() {
  const src = process.env.REACT_APP_URL_SETTINGS_SITE;
  const id = 'root_settings_site'

  return (
    <div className={s.root}>
      <div className={s.block}></div>
      <Iframe src={src} id={id} noPartner={true} />
    </div>

  );
}
