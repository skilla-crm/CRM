import Iframe from '@/components/Iframe/Iframe'

export const metadata = {
  title: "Дашборд"
};

export default async function Dashboar() {
  const src = process.env.REACT_APP_URL_DASHBOARD;
  const id = 'root_dashboard'
  return (
    <Iframe src={src} id={id} />
  );
}
